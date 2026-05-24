import type { LanguageSkill } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface LanguageRatingProps {
  languages: LanguageSkill[]
}

const MAX_SCORE = 5

export function LanguageRating({ languages }: LanguageRatingProps) {
  const { locale } = useLocale()

  return (
    <div>
      {languages.map((lang, index) => (
        <div key={index} className="cv-language">
          <span>
            {pickLocalized(lang.language, locale)}
            {lang.levelLabel && (
              <span className="cv-language__level"> — {pickLocalized(lang.levelLabel, locale)}</span>
            )}
          </span>
          <div className="cv-language__dots" aria-hidden>
            {Array.from({ length: MAX_SCORE }, (_, i) => (
              <span
                key={i}
                className={`cv-language__dot${i < lang.score ? ' cv-language__dot--filled' : ''}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
