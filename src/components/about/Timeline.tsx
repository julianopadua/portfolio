import { timelineEvents } from '../../data/timeline'
import type { TimelineEvent } from '../../data/types'
import { publicAsset } from '../../lib/assets'
import { pickLocalized } from '../../lib/localized'
import { sortByStartAsc } from '../../lib/sort'
import { useLocale } from '../../i18n/useLocale'
import { SectionTitle } from '../ui/SectionTitle'
import { Tag } from '../ui/Tag'

function formatPeriod(event: TimelineEvent, locale: 'pt' | 'en'): string {
  if (event.displayPeriod) {
    return pickLocalized(event.displayPeriod, locale)
  }
  return event.start
}

export function Timeline() {
  const { locale, t } = useLocale()
  const events = sortByStartAsc(timelineEvents)

  return (
    <section className="mt-12" aria-labelledby="timeline-heading">
      <SectionTitle id="timeline-heading">{t.about.timeline}</SectionTitle>
      <ol className="relative border-l border-[var(--color-border)] pl-6">
        {events.map((event) => {
          const title = pickLocalized(event.title, locale)
          const org = event.organization ? pickLocalized(event.organization, locale) : null
          const summary = pickLocalized(event.summary, locale)
          const period = formatPeriod(event, locale)

          return (
            <li key={event.id} className="mb-8 ml-2 last:mb-0">
              <span
                className={`absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full border border-[var(--color-border)] bg-white ${event.logo ? 'opacity-40' : ''}`}
                aria-hidden
              />
              <div className="flex gap-4">
                {event.logo && (
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center">
                    <img
                      src={publicAsset(event.logo)}
                      alt=""
                      width={40}
                      height={40}
                      className="max-h-10 max-w-10 object-contain"
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <time
                      className="text-xs uppercase tracking-widest text-[var(--color-muted)]"
                      dateTime={event.start}
                    >
                      {period}
                    </time>
                    {event.placeholder && (
                      <Tag variant="muted">{t.about.placeholder}</Tag>
                    )}
                  </div>
                  <h3 className="mt-1 font-serif text-lg font-normal leading-snug text-[var(--color-ink)]">
                    {event.href ? (
                      <a
                        href={event.href}
                        className="hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {title}
                      </a>
                    ) : (
                      title
                    )}
                  </h3>
                  {org && (
                    <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">{org}</p>
                  )}
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{summary}</p>
                  {event.tags && event.tags.length > 0 && (
                    <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Tags">
                      {event.tags.map((tag) => (
                        <li key={tag}>
                          <Tag>{tag}</Tag>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}
