import { profile } from '../../data/profile'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'
import { SectionTitle } from '../ui/SectionTitle'

export function AboutIntro() {
  const { locale, t } = useLocale()

  return (
    <section aria-labelledby="about-intro-heading">
      <SectionTitle as="h1" id="about-intro-heading">
        {t.about.title}
      </SectionTitle>
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
        {t.about.intro}
      </p>
      <div className="space-y-4 text-justify font-serif text-base leading-relaxed text-[var(--color-ink)]">
        {profile.bio.map((paragraph, index) => (
          <p key={index} className="text-justify">
            {pickLocalized(paragraph, locale)}
          </p>
        ))}
      </div>
    </section>
  )
}
