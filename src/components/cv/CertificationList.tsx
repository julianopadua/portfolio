import type { CertificationItem } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface CertificationListProps {
  items: CertificationItem[]
}

export function CertificationList({ items }: CertificationListProps) {
  const { locale } = useLocale()

  return (
    <div>
      {items.map((item) => (
        <article key={item.id} className="cv-cert-item cv-avoid-break">
          <p className="cv-cert-item__title">{pickLocalized(item.title, locale)}</p>
          <p className="cv-cert-item__issuer">{pickLocalized(item.issuer, locale)}</p>
          <p className="cv-cert-item__period">{pickLocalized(item.period, locale)}</p>
        </article>
      ))}
    </div>
  )
}
