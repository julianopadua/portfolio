import type { CompactExperience } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface CompactExperienceListProps {
  items: CompactExperience[]
}

export function CompactExperienceList({ items }: CompactExperienceListProps) {
  const { locale } = useLocale()

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="cv-compact cv-avoid-break">
          <div className="cv-compact__row">
            <span className="cv-compact__company">
              {item.href ? (
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.company}
                </a>
              ) : (
                item.company
              )}
            </span>
            <span className="cv-compact__title">{pickLocalized(item.title, locale)}</span>
          </div>
          <p className="cv-compact__meta">
            {pickLocalized(item.period, locale)}
            {item.location && ` · ${pickLocalized(item.location, locale)}`}
          </p>
        </div>
      ))}
    </div>
  )
}
