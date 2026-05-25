import { Calendar, MapPin } from 'lucide-react'
import type { EducationItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface EducationListProps {
  items: EducationItem[]
}

export function EducationList({ items }: EducationListProps) {
  const { locale } = useLocale()

  return (
    <div>
      {items.map((item) => (
        <article key={item.id} className="cv-edu-item cv-avoid-break">
          <p className="cv-edu-item__degree">{pickLocalized(item.degree, locale)}</p>
          <p className="cv-edu-item__institution">
            {pickLocalized(item.institution, locale)}
          </p>
          <div className="cv-edu-item__meta">
            <span className="cv-edu-item__meta-item">
              <Calendar size={11} aria-hidden />
              {pickLocalized(item.period, locale)}
            </span>
            {item.location && (
              <span className="cv-edu-item__meta-item">
                <MapPin size={11} aria-hidden />
                {pickLocalized(item.location, locale)}
              </span>
            )}
          </div>
        </article>
      ))}
    </div>
  )
}
