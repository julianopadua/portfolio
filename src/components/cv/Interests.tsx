import type { InterestItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface InterestsProps {
  items: InterestItem[]
}

export function Interests({ items }: InterestsProps) {
  const { locale } = useLocale()

  return (
    <div>
      {items.map((item) => (
        <p key={item.id} className="cv-interest cv-avoid-break">
          <span className="cv-interest__title">{pickLocalized(item.title, locale)}: </span>
          {pickLocalized(item.description, locale)}
        </p>
      ))}
    </div>
  )
}
