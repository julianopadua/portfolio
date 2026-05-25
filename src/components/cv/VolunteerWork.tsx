import type { VolunteerItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface VolunteerWorkProps {
  items: VolunteerItem[]
}

export function VolunteerWork({ items }: VolunteerWorkProps) {
  const { locale } = useLocale()

  return (
    <div>
      {items.map((item) => (
        <article key={item.id} className="cv-volunteer cv-avoid-break">
          <p className="cv-volunteer__org">{pickLocalized(item.organization, locale)}</p>
          <p className="cv-volunteer__role">{pickLocalized(item.role, locale)}</p>
          <p className="cv-volunteer__meta">
            {pickLocalized(item.period, locale)}
            {item.location && ` · ${pickLocalized(item.location, locale)}`}
          </p>
          <ul className="cv-volunteer__bullets">
            {item.bullets.map((bullet, index) => (
              <li key={index}>{pickLocalized(bullet, locale)}</li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  )
}
