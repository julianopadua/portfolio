import fs from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'
import { pdfCvDocument, type PdfCvEntry, type PdfCvLocale } from '../src/data/pdfCv'

const labels: Record<PdfCvLocale, Record<string, string>> = {
  pt: {
    summary: 'Resumo profissional',
    skills: 'Competências técnicas',
    experience: 'Experiência profissional',
    additionalExperience: 'Experiência adicional',
    projects: 'Conquistas',
    certifications: 'Certificações',
    education: 'Formação',
    languages: 'Idiomas',
  },
  en: {
    summary: 'Professional Summary',
    skills: 'Technical Skills',
    experience: 'Professional Experience',
    additionalExperience: 'Additional Experience',
    projects: 'Achievements',
    certifications: 'Certifications',
    education: 'Education',
    languages: 'Languages',
  },
}

function formatDateStamp(date = new Date()): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}${month}${day}`
}

function outputPath(locale: PdfCvLocale): string {
  return path.resolve('docs', locale, `${formatDateStamp()}_CV_Juliano_Padua.pdf`)
}

function escapeHtml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function assertAsciiDashOnly(text: string): void {
  const enDash = String.fromCharCode(0x2013)
  const emDash = String.fromCharCode(0x2014)
  const forbiddenDashPattern = new RegExp(`[${enDash}${emDash}]`, 'u')

  if (forbiddenDashPattern.test(text)) {
    throw new Error('Generated CV data contains an en dash or em dash. Use ASCII hyphen only.')
  }
}

function assetDataUri(relativePath: string): string {
  const absolutePath = path.resolve(relativePath)
  const extension = path.extname(absolutePath).toLowerCase()
  const mimeType = extension === '.png' ? 'image/png' : 'image/jpeg'
  return `data:${mimeType};base64,${fs.readFileSync(absolutePath).toString('base64')}`
}

function icon(name: 'mail' | 'phone' | 'map' | 'linkedin' | 'github' | 'globe'): string {
  const paths = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.91.33 1.79.63 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.63.63A2 2 0 0 1 22 16.92z"/>',
    map: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0z"/><circle cx="12" cy="10" r="3"/>',
    linkedin: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.61-3.37-1.18-3.37-1.18-.45-1.14-1.11-1.45-1.11-1.45-.91-.62.07-.61.07-.61 1 .07 1.53 1.04 1.53 1.04.9 1.52 2.35 1.08 2.92.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.99c.85 0 1.7.11 2.5.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.57c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/>',
    globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 0 20"/><path d="M12 2a15.3 15.3 0 0 0 0 20"/>',
  }

  return `<svg class="cv-header__contact-icon" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`
}

function contact(iconName: Parameters<typeof icon>[0], href: string | undefined, text: string): string {
  const content = href
    ? `<a href="${escapeHtml(href)}" class="cv-link cv-link--url">${escapeHtml(text)}</a>`
    : `<span>${escapeHtml(text)}</span>`

  return `<span class="cv-header__contact cv-header__contact--url">${icon(iconName)}${content}</span>`
}

function section(title: string, body: string, compact = false): string {
  const className = compact ? 'cv-section-title cv-section-title--compact' : 'cv-section-title'
  return `<section class="cv-section cv-avoid-break"><h2 class="${className}">${escapeHtml(title)}</h2>${body}</section>`
}

function bullets(items: string[]): string {
  return `<ul class="cv-experience__bullets">${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
}

function renderEntries(entries: PdfCvEntry[], locale: PdfCvLocale): string {
  return entries
    .map((entry) => {
      const meta = [entry.period?.[locale], entry.location?.[locale]].filter(Boolean)
      const metaHtml = meta
        .map((item, index) => {
          const iconName = index === 0 ? 'mail' : 'map'
          const actualIcon = index === 0 ? calendarIcon() : icon(iconName)
          return `<span class="cv-experience__meta-item">${actualIcon}${escapeHtml(item ?? '')}</span>`
        })
        .join('')

      return `
        <article class="cv-experience cv-avoid-break">
          <h3 class="cv-experience__company">${escapeHtml(entry.organization)}</h3>
          <div class="cv-experience__meta">${metaHtml}</div>
          <p class="cv-experience__role-title">${escapeHtml(entry.title[locale])}</p>
          ${bullets(entry.bullets.map((item) => item[locale]))}
        </article>
      `
    })
    .join('')
}

function calendarIcon(): string {
  return '<svg class="cv-header__contact-icon" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/></svg>'
}

function renderSkills(locale: PdfCvLocale): string {
  return `
    <div class="cv-pdf-skills">
      ${pdfCvDocument.skills
        .map(
          (group) => `
            <div class="cv-pdf-skill-group">
              <p class="cv-pdf-skill-group__label">${escapeHtml(group.label[locale])}</p>
              <div class="cv-chips">
                ${group.items.map((item) => `<span class="cv-chip">${escapeHtml(item)}</span>`).join('')}
              </div>
            </div>
          `,
        )
        .join('')}
    </div>
  `
}

function renderLanguages(locale: PdfCvLocale): string {
  return `
    <div>
      ${pdfCvDocument.languages.items[locale]
        .map((item) => {
          const [language, level] = item.split(' - ')
          return `
            <div class="cv-language">
              <strong>${escapeHtml(language ?? item)}</strong>
              <span class="cv-language__level">${escapeHtml(level ?? '')}</span>
            </div>
          `
        })
        .join('')}
    </div>
  `
}

function renderEducation(locale: PdfCvLocale): string {
  return pdfCvDocument.education
    .map(
      (entry) => `
        <article class="cv-edu-item">
          <p class="cv-edu-item__degree">${escapeHtml(entry.title[locale])}</p>
          <p class="cv-edu-item__institution">${escapeHtml(entry.organization)}</p>
          <div class="cv-edu-item__meta">
            <span class="cv-edu-item__meta-item">${calendarIcon()}${escapeHtml(entry.period?.[locale] ?? '')}</span>
            <span class="cv-edu-item__meta-item">${icon('map')}${escapeHtml(entry.location?.[locale] ?? '')}</span>
          </div>
          <p class="cv-achievement__desc">${escapeHtml(entry.bullets[0]?.[locale] ?? '')}</p>
        </article>
      `,
    )
    .join('')
}

function renderProjects(locale: PdfCvLocale): string {
  return pdfCvDocument.projects
    .map((entry) => {
      const organization = entry.href
        ? `<a href="${escapeHtml(entry.href)}" class="cv-link">${escapeHtml(entry.organization)}</a>`
        : escapeHtml(entry.organization)

      return `
        <article class="cv-achievement cv-avoid-break">
          <h3 class="cv-achievement__title">${escapeHtml(entry.title[locale])}</h3>
          <p class="cv-achievement__org">${organization}${entry.period ? ` | ${escapeHtml(entry.period[locale])}` : ''}</p>
          ${bullets(entry.bullets.map((item) => item[locale]))}
        </article>
      `
    })
    .join('')
}

function renderCompactEntries(entries: PdfCvEntry[], locale: PdfCvLocale, includeNotes = true): string {
  return entries
    .map(
      (entry) => `
        <article class="cv-compact">
          <div class="cv-compact__row">
            <span class="cv-compact__company">${escapeHtml(entry.organization)}</span>
            <span class="cv-compact__title">${escapeHtml(entry.title[locale])}</span>
          </div>
          <p class="cv-compact__meta">${escapeHtml([entry.period?.[locale], entry.location?.[locale]].filter(Boolean).join(' | '))}</p>
          ${includeNotes && entry.bullets[0] ? `<p class="cv-pdf-small-note">${escapeHtml(entry.bullets[0][locale])}</p>` : ''}
        </article>
      `,
    )
    .join('')
}

function renderCertifications(locale: PdfCvLocale): string {
  return pdfCvDocument.certifications
    .map(
      (entry) => `
        <article class="cv-cert-item">
          <p class="cv-cert-item__title">${escapeHtml(entry.title[locale])}</p>
          <p class="cv-cert-item__issuer">${escapeHtml(entry.organization)}</p>
          <p class="cv-cert-item__period">${escapeHtml(entry.period?.[locale] ?? '')}</p>
        </article>
      `,
    )
    .join('')
}

function renderHeader(locale: PdfCvLocale): string {
  const profile = pdfCvDocument.profile
  const linkedinText = profile.linkedin.replace(/^https?:\/\//u, '').replace(/\/$/u, '')
  const githubText = profile.github.replace(/^https?:\/\//u, '').replace(/\/$/u, '')
  const portfolioText = profile.portfolio
    .replace(/^https?:\/\//u, '')
    .replace(/\/#\/about$/u, '')
    .replace(/\/$/u, '')

  return `
    <header class="cv-header cv-avoid-break">
      <div>
        <h1 class="cv-header__name">${escapeHtml(profile.name.toUpperCase())}</h1>
        <p class="cv-header__headline">${escapeHtml(profile.title[locale])}</p>
        <div class="cv-header__contacts">
          ${contact('mail', `mailto:${profile.email}`, profile.email)}
          ${contact('phone', undefined, profile.phone)}
          ${contact('map', undefined, profile.location[locale])}
          ${contact('linkedin', profile.linkedin, linkedinText)}
          ${contact('github', profile.github, githubText)}
          ${contact('globe', profile.portfolio, portfolioText)}
        </div>
      </div>
      <img class="cv-header__photo" src="${assetDataUri(profile.photoSrc)}" alt="" />
    </header>
  `
}

function renderHtml(locale: PdfCvLocale): string {
  const cvCss = fs.readFileSync(path.resolve('src/styles/cv.css'), 'utf8')
  const printCss = fs.readFileSync(path.resolve('src/styles/print.css'), 'utf8')

  return `
    <!doctype html>
    <html lang="${locale}">
      <head>
        <meta charset="utf-8" />
        <title>${escapeHtml(pdfCvDocument.profile.name)} - CV</title>
        <style>
          ${cvCss}
          ${printCss}
          html, body {
            margin: 0;
            padding: 0;
            background: #ffffff;
          }
          #cv-print.cv-document--print {
            box-shadow: none;
          }
          .cv-pdf-skills {
            display: grid;
            gap: 3mm;
          }
          .cv-pdf-skill-group__label {
            font-family: var(--cv-title-font);
            font-size: 9.5pt;
            font-weight: 700;
            color: var(--cv-accent);
            margin: 0 0 1.5mm;
          }
          .cv-pdf-projects .cv-experience__bullets {
            margin-top: 1.5mm;
          }
          .cv-pdf-small-note {
            font-size: 8.8pt;
            color: #444444;
            line-height: 1.22;
            margin: 1.5mm 0 0;
            text-align: left;
          }
          .cv-pdf-projects .cv-compact__row {
            display: block;
          }
          .cv-pdf-projects .cv-compact__title {
            display: block;
            margin-top: 0.5mm;
            color: var(--cv-accent);
            text-align: left;
          }
          .cv-pdf-other-experience .cv-section-title {
            font-size: 12pt;
            margin-bottom: 2mm;
            padding-bottom: 1.5mm;
          }
          .cv-pdf-other-experience .cv-compact {
            margin-bottom: 2mm;
          }
          .cv-pdf-other-experience .cv-compact__row {
            display: block;
          }
          .cv-pdf-other-experience .cv-compact__title {
            display: block;
            color: var(--cv-accent);
            margin-top: 0.3mm;
            text-align: left;
          }
          .cv-pdf-other-experience .cv-compact__meta {
            margin-top: 0.3mm;
          }
          @media print {
            .cv-document--print .cv-pdf-other-experience .cv-section {
              margin-bottom: 2mm !important;
            }
            .cv-document--print .cv-pdf-other-experience .cv-section-title {
              font-size: 11.5pt !important;
              margin-bottom: 1.8mm !important;
              padding-bottom: 1.3mm !important;
            }
            .cv-document--print .cv-pdf-other-experience .cv-compact__company,
            .cv-document--print .cv-pdf-other-experience .cv-compact__title {
              font-size: 8.4pt !important;
            }
            .cv-document--print .cv-pdf-other-experience .cv-compact__meta {
              font-size: 7.8pt !important;
            }
          }
        </style>
      </head>
      <body>
        <div id="cv-print" class="cv-document cv-document--print" data-cv-variant="print">
          <div class="cv-page-sheet cv-page-sheet--1">
            <div class="cv-page-sheet__content">
              ${renderHeader(locale)}
              <p class="cv-summary">${escapeHtml(pdfCvDocument.profile.summary[locale])}</p>
              <div class="cv-grid-page-1">
                <div class="cv-col">
                  ${section(labels[locale].experience, renderEntries(pdfCvDocument.experience, locale))}
                  <div class="cv-pdf-other-experience">
                    ${section(labels[locale].additionalExperience, renderCompactEntries(pdfCvDocument.additionalExperience, locale, false), true)}
                  </div>
                </div>
                <div class="cv-col">
                  ${section(labels[locale].skills, renderSkills(locale), true)}
                  ${section(labels[locale].languages, renderLanguages(locale), true)}
                  ${section(labels[locale].education, renderEducation(locale), true)}
                </div>
              </div>
            </div>
            <footer class="cv-page-footer" aria-hidden="true">1</footer>
          </div>
          <div class="cv-page-sheet cv-page-sheet--2">
            <div class="cv-page-sheet__content cv-pdf-projects">
              <div class="cv-grid-page-2">
                <div class="cv-col">
                  ${section(labels[locale].certifications, renderCertifications(locale), true)}
                </div>
                <div class="cv-col">
                  ${section(labels[locale].projects, renderProjects(locale), true)}
                </div>
              </div>
            </div>
            <footer class="cv-page-footer" aria-hidden="true">2</footer>
          </div>
        </div>
      </body>
    </html>
  `
}

function parseLocales(): PdfCvLocale[] {
  const arg = process.argv[2]
  if (!arg) {
    return ['pt', 'en']
  }
  if (arg === 'pt' || arg === 'en') {
    return [arg]
  }
  throw new Error(`Unknown locale "${arg}". Use "pt", "en", or no argument for both.`)
}

async function renderCv(locale: PdfCvLocale): Promise<string> {
  const targetPath = outputPath(locale)
  fs.mkdirSync(path.dirname(targetPath), { recursive: true })

  const browser = await puppeteer.launch({ headless: true })
  try {
    const page = await browser.newPage()
    await page.setContent(renderHtml(locale), { waitUntil: 'networkidle0' })
    await page.emulateMediaType('print')
    await page.pdf({
      path: targetPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: { top: '0', right: '0', bottom: '0', left: '0' },
    })
  } finally {
    await browser.close()
  }

  return targetPath
}

assertAsciiDashOnly(JSON.stringify(pdfCvDocument))

const generatedPaths = []
for (const locale of parseLocales()) {
  generatedPaths.push(await renderCv(locale))
}

for (const generatedPath of generatedPaths) {
  console.log(`Generated ${generatedPath}`)
}
