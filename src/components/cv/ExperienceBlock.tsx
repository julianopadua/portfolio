import { Calendar, MapPin } from 'lucide-react'
import type { CvExperience } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface ExperienceBlockProps {
  experiences: CvExperience[]
}

export function ExperienceBlock({ experiences }: ExperienceBlockProps) {
  const { locale } = useLocale()

  return (
    <div>
      {experiences.map((exp) => (
        <article key={exp.id} className="cv-experience cv-avoid-break">
          <h3 className="cv-experience__company">
            {exp.href ? (
              <a href={exp.href} target="_blank" rel="noopener noreferrer">
                {exp.company}
              </a>
            ) : (
              exp.company
            )}
          </h3>
          <div className="cv-experience__meta">
            <span className="cv-experience__meta-item">
              <Calendar size={11} aria-hidden />
              {pickLocalized(exp.period, locale)}
            </span>
            {exp.location && (
              <span className="cv-experience__meta-item">
                <MapPin size={11} aria-hidden />
                {pickLocalized(exp.location, locale)}
              </span>
            )}
          </div>
          {exp.roles.map((role, roleIndex) => (
            <div key={roleIndex}>
              <p className="cv-experience__role-title">{pickLocalized(role.title, locale)}</p>
              {role.period && (
                <p className="cv-experience__role-period">{pickLocalized(role.period, locale)}</p>
              )}
              <ul className="cv-experience__bullets">
                {role.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex}>{pickLocalized(bullet, locale)}</li>
                ))}
              </ul>
            </div>
          ))}
        </article>
      ))}
    </div>
  )
}
