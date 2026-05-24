import type { ProjectItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'
import { Card } from '../ui/Card'
import { Tag } from '../ui/Tag'

interface ProjectCardProps {
  project: ProjectItem
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { locale, t } = useLocale()
  const name = pickLocalized(project.name, locale)
  const short = pickLocalized(project.shortDescription, locale)
  const long = project.longDescription ? pickLocalized(project.longDescription, locale) : null
  const statusLabel = t.projects.status[project.status]

  return (
    <Card className={project.placeholder ? 'opacity-80' : ''}>
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-serif text-lg font-semibold">{name}</h3>
        <Tag variant="muted">{statusLabel}</Tag>
      </div>
      {project.period && (
        <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-muted)]">
          {t.projects.period}: {project.period}
        </p>
      )}
      <p className="mt-3 text-sm leading-relaxed">{short}</p>
      {long && <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{long}</p>}
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
        {project.links.demo && (
          <a
            href={project.links.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase tracking-widest text-[var(--color-accent)] hover:underline"
          >
            {t.projects.viewDemo}
          </a>
        )}
      </div>
    </Card>
  )
}
