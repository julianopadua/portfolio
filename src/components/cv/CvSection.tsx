import type { CvEntry, CvPublication, CvSkill } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface CvSectionProps {
  title: string
  children: React.ReactNode
}

export function CvSectionBlock({ title, children }: CvSectionProps) {
  return (
    <section className="cv-section-block mb-8">
      <h2 className="mb-4 border-b border-[var(--color-border)] pb-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {title}
      </h2>
      {children}
    </section>
  )
}

export function CvEntryList({ entries }: { entries: CvEntry[] }) {
  const { locale, t } = useLocale()

  return (
    <ul className="space-y-5">
      {entries.map((entry) => (
        <li key={entry.id} className="cv-entry">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-serif text-base font-semibold">
              {entry.href ? (
                <a href={entry.href} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  {pickLocalized(entry.title, locale)}
                </a>
              ) : (
                pickLocalized(entry.title, locale)
              )}
            </h3>
            <span className="text-xs text-[var(--color-muted)]">
              {pickLocalized(entry.period, locale)}
            </span>
          </div>
          {entry.organization && (
            <p className="text-sm text-[var(--color-muted)]">
              {pickLocalized(entry.organization, locale)}
              {entry.location && ` · ${pickLocalized(entry.location, locale)}`}
            </p>
          )}
          <p className="mt-1 text-sm leading-relaxed">{pickLocalized(entry.description, locale)}</p>
          {entry.placeholder && (
            <p className="mt-1 text-xs italic text-[var(--color-muted)]">{t.cv.placeholder}</p>
          )}
        </li>
      ))}
    </ul>
  )
}

export function CvSkillList({ skills, ordered }: { skills: CvSkill[]; ordered?: boolean }) {
  const { locale } = useLocale()
  const Tag = ordered ? 'ol' : 'ul'
  const listClass = ordered ? 'list-decimal space-y-2 pl-5' : 'list-disc space-y-2 pl-5'

  return (
    <Tag className={listClass}>
      {skills.map((skill, i) => (
        <li key={i} className="text-sm leading-relaxed">
          <span className="font-medium">{pickLocalized(skill.name, locale)}</span>
          {skill.detail && (
            <span className="text-[var(--color-muted)]"> — {pickLocalized(skill.detail, locale)}</span>
          )}
        </li>
      ))}
    </Tag>
  )
}

export function CvPublicationList({ items }: { items: CvPublication[] }) {
  const { locale, t } = useLocale()

  return (
    <ul className="space-y-3">
      {items.map((pub) => (
        <li key={pub.id} className="cv-entry text-sm">
          {pub.href ? (
            <a href={pub.href} className="font-medium hover:underline" target="_blank" rel="noopener noreferrer">
              {pickLocalized(pub.title, locale)}
            </a>
          ) : (
            <span className="font-medium">{pickLocalized(pub.title, locale)}</span>
          )}
          {pub.authors && (
            <span className="text-[var(--color-muted)]"> — {pickLocalized(pub.authors, locale)}</span>
          )}
          {pub.venue && (
            <span className="text-[var(--color-muted)]">. {pickLocalized(pub.venue, locale)}</span>
          )}
          {pub.year && <span className="text-[var(--color-muted)]"> ({pub.year})</span>}
          {pub.placeholder && (
            <p className="mt-1 text-xs italic text-[var(--color-muted)]">{t.cv.placeholder}</p>
          )}
        </li>
      ))}
    </ul>
  )
}
