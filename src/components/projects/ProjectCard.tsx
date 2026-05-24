import type { ProjectItem } from '../../data/types'
import { publicAsset } from '../../lib/assets'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: ProjectItem
  variant?: 'default' | 'hero'
}

function siteHostname(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export function ProjectCard({ project, variant = 'default' }: ProjectCardProps) {
  const { locale, t } = useLocale()
  const isHero = variant === 'hero'
  const name = pickLocalized(project.name, locale)
  const short = pickLocalized(project.shortDescription, locale)
  const long = project.longDescription ? pickLocalized(project.longDescription, locale) : null
  const statusLabel = t.projects.status[project.status]
  const preview = project.sitePreview

  const previewLink = preview ? (
    <a
      href={preview.url}
      target="_blank"
      rel="noopener noreferrer"
      className="project-link-preview group block overflow-hidden rounded-sm border border-[var(--color-border)] bg-white transition hover:border-[var(--color-muted)]"
    >
      <div
        className={`relative w-full overflow-hidden bg-stone-100 ${
          isHero ? 'aspect-[1200/630] max-h-[min(22rem,42vw)]' : 'aspect-[1200/630]'
        }`}
      >
        <img
          src={preview.imageUrl}
          alt=""
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2.5">
        <p className="text-[10px] uppercase tracking-widest text-[var(--color-muted)]">
          {siteHostname(preview.url)}
        </p>
        <p
          className={`mt-0.5 font-semibold text-[var(--color-ink)] ${isHero ? 'line-clamp-2 text-base' : 'line-clamp-1 text-sm'}`}
        >
          {pickLocalized(preview.title, locale)}
        </p>
        <p
          className={`mt-1 leading-relaxed text-[var(--color-muted)] ${isHero ? 'line-clamp-3 text-sm' : 'line-clamp-2 text-xs'}`}
        >
          {pickLocalized(preview.description, locale)}
        </p>
      </div>
    </a>
  ) : null

  const body = (
    <>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className={`font-serif font-semibold ${isHero ? 'text-2xl' : 'text-lg'}`}>{name}</h3>
        <Tag variant="muted">{statusLabel}</Tag>
      </div>
      {project.period && (
        <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-muted)]">
          {t.projects.period}: {project.period}
        </p>
      )}
      {!isHero && <p className="mt-3 text-sm leading-relaxed">{short}</p>}
      {long && (
        <p
          className={`leading-relaxed text-[var(--color-muted)] ${isHero ? 'mt-3 text-sm' : 'mt-2 text-sm'}`}
        >
          {long}
        </p>
      )}
      {project.stack.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-muted)]">
            {t.projects.stack}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stack.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        </div>
      )}
      {project.tags.length > 0 && (
        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tags">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Tag variant="muted">{tag}</Tag>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 flex flex-wrap gap-4 text-sm">
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest text-[var(--color-accent)] hover:underline"
          >
            {t.projects.viewSite}
          </a>
        )}
        {project.links.repository && (
          <a
            href={project.links.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest text-[var(--color-accent)] hover:underline"
          >
            {t.projects.viewRepo}
          </a>
        )}
        {project.links.other?.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest text-[var(--color-accent)] hover:underline"
          >
            {pickLocalized(link.label, locale)}
          </a>
        ))}
      </div>
    </>
  )

  return (
    <Card
      className={`${project.placeholder ? 'opacity-80' : ''} ${isHero ? 'lg:col-span-2' : ''}`}
    >
      {isHero && preview ? (
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
          <div className="min-w-0 lg:w-[52%] lg:shrink-0">{previewLink}</div>
          <div className="min-w-0 lg:flex-1">{body}</div>
        </div>
      ) : (
        <>
          {project.logo && (
            <img
              src={publicAsset(project.logo)}
              alt=""
              className="mb-4 h-14 w-14 rounded-full border border-[var(--color-border)] object-cover"
              width={56}
              height={56}
            />
          )}
          {preview && <div className="mb-4">{previewLink}</div>}
          {body}
        </>
      )}
    </Card>
  )
}
