import type { SkillTag } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface SkillChipsProps {
  skills: SkillTag[]
}

export function SkillChips({ skills }: SkillChipsProps) {
  const { locale } = useLocale()

  return (
    <div className="cv-chips">
      {skills.map((skill, index) => (
        <span key={index} className="cv-chip">
          {pickLocalized(skill.label, locale)}
        </span>
      ))}
    </div>
  )
}
