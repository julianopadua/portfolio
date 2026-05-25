import { Code2, Globe, Link, Mail, MapPin, Phone } from 'lucide-react'
import type { CvProfile } from '../../data/types'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

interface CvHeaderProps {
  profile: CvProfile
}

export function CvHeader({ profile }: CvHeaderProps) {
  const { locale } = useLocale()
  const location = pickLocalized(profile.location, locale)
  const headline = pickLocalized(profile.headline, locale)

  return (
    <header className="cv-header cv-avoid-break">
      <div>
        <h1 className="cv-header__name">{profile.name.toUpperCase()}</h1>
        <p className="cv-header__headline">{headline}</p>
        <div className="cv-header__contacts">
          <span className="cv-header__contact">
            <Mail className="cv-header__contact-icon" size={12} aria-hidden />
            <a href={`mailto:${profile.email}`} className="cv-link">
              {profile.email}
            </a>
          </span>
          {profile.phone && (
            <span className="cv-header__contact">
              <Phone className="cv-header__contact-icon" size={12} aria-hidden />
              <span>{profile.phone}</span>
            </span>
          )}
          <span className="cv-header__contact">
            <MapPin className="cv-header__contact-icon" size={12} aria-hidden />
            <span>{location}</span>
          </span>
          <span className="cv-header__contact">
            <Link className="cv-header__contact-icon" size={12} aria-hidden />
            <a
              href={profile.linkedin}
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
              title={profile.linkedin}
            >
              LinkedIn
            </a>
          </span>
          <span className="cv-header__contact">
            <Code2 className="cv-header__contact-icon" size={12} aria-hidden />
            <a
              href={profile.github}
              className="cv-link"
              target="_blank"
              rel="noopener noreferrer"
              title={profile.github}
            >
              GitHub
            </a>
          </span>
          {profile.website && (
            <span className="cv-header__contact">
              <Globe className="cv-header__contact-icon" size={12} aria-hidden />
              <a
                href={profile.website}
                className="cv-link"
                target="_blank"
                rel="noopener noreferrer"
                title={profile.website}
              >
                Portfolio
              </a>
            </span>
          )}
        </div>
      </div>
      <img
        className="cv-header__photo"
        src={profile.photoSrc}
        alt=""
        width={128}
        height={128}
      />
    </header>
  )
}
