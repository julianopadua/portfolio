import type { AchievementItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'
import { CvLinkedText } from './CvLinkedText'

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
              <a href={item.href} className="cv-link" target="_blank" rel="noopener noreferrer">
                {pickLocalized(item.title, locale)}
              </a>
            ) : (
              pickLocalized(item.title, locale)
            )}
            {item.organization && (
              <>
                {' '}
                <span className="cv-achievement__org">
                  |{' '}
                  {item.organizationHref ? (
                    <a
                      href={item.organizationHref}
                      className="cv-link cv-accent cv-link--url"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.organizationHref}
                    </a>
                  ) : (
                    pickLocalized(item.organization, locale)
                  )}
                </span>
              </>
            )}
          </p>
          <p className="cv-achievement__desc">
            <CvLinkedText text={pickLocalized(item.description, locale)} />
          </p>
        </article>
      ))}
    </div>
  )
}
