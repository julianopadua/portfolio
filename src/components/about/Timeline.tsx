import { timelineEvents } from '../../data/timeline'
import type { TimelineKind } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { sortByStartDesc } from '../../lib/sort'
import { useLocale } from '../../i18n/useLocale'
import { SectionTitle } from '../ui/SectionTitle'
import { Tag } from '../ui/Tag'

function formatPeriod(start: string, end?: string): string {
  if (end) return `${start} — ${end}`
  return start
}

export function Timeline() {
  const { locale, t } = useLocale()
  const events = sortByStartDesc(timelineEvents)

  const kindLabel = (kind: TimelineKind) => t.timeline.kinds[kind]

  return (
    <section className="mt-12" aria-labelledby="timeline-heading">
      <SectionTitle id="timeline-heading">{t.about.timeline}</SectionTitle>
      <ol className="relative border-l border-[var(--color-border)] pl-6">
        {events.map((event) => {
          const title = pickLocalized(event.title, locale)
          const org = event.organization ? pickLocalized(event.organization, locale) : null
          const summary = pickLocalized(event.summary, locale)

          return (
            <li key={event.id} className="mb-8 ml-2 last:mb-0">
              <span
                className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-[var(--color-border)] bg-white"
                aria-hidden
              />
              <div className="flex flex-wrap items-baseline gap-2">
                <time
                  className="text-xs uppercase tracking-widest text-[var(--color-muted)]"
                  dateTime={event.start}
                >
                  {formatPeriod(event.start, event.end)}
                </time>
                <Tag variant="muted">{kindLabel(event.kind)}</Tag>
                {event.placeholder && (
                  <Tag variant="muted">{t.about.placeholder}</Tag>
                )}
              </div>
              <h3 className="mt-1 font-serif text-lg font-semibold">
                {event.href ? (
                  <a href={event.href} className="hover:underline" target="_blank" rel="noopener noreferrer">
                    {title}
                  </a>
                ) : (
                  title
                )}
              </h3>
              {org && <p className="text-sm text-[var(--color-muted)]">{org}</p>}
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink)]">{summary}</p>
              {event.tags && event.tags.length > 0 && (
                <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
                  {event.tags.map((tag) => (
                    <li key={tag}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          )
        })}
      </ol>
    </section>
  )
}
