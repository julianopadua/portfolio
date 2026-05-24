import type { AchievementItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface AchievementsProps {
  items: AchievementItem[]
}

export function Achievements({ items }: AchievementsProps) {
  const { locale } = useLocale()

  return (
    <div>
      {items.map((item) => (
        <article key={item.id} className="cv-achievement cv-avoid-break">
          <p className="cv-achievement__title">
            {item.href ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {pickLocalized(item.title, locale)}
              </a>
            ) : (
              pickLocalized(item.title, locale)
            )}
            {item.organization && (
              <>
                {' '}
                <span className="cv-achievement__org">
                  | {pickLocalized(item.organization, locale)}
                </span>
              </>
            )}
          </p>
          <p className="cv-achievement__desc">{pickLocalized(item.description, locale)}</p>
        </article>
      ))}
    </div>
  )
}
