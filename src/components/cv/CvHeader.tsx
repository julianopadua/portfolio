import { Globe, Mail, MapPin, Phone } from 'lucide-react'
import type { CvProfile } from '../../data/types'
import { publicAsset } from '../../lib/assets'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

const brandIcons = {
  github: publicAsset('icons/githubclaro.png'),
  linkedin: publicAsset('icons/linkedinclaro.png'),
} as const

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
          <span className="cv-header__contact cv-header__contact--url">
            <img
              src={brandIcons.linkedin}
              alt=""
              width={12}
              height={12}
              className="cv-header__brand-icon"
              aria-hidden
            />
            <a
              href={profile.linkedin}
              className="cv-link cv-link--url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.linkedin}
            </a>
          </span>
          <span className="cv-header__contact cv-header__contact--url">
            <img
              src={brandIcons.github}
              alt=""
              width={12}
              height={12}
              className="cv-header__brand-icon"
              aria-hidden
            />
            <a
              href={profile.github}
              className="cv-link cv-link--url"
              target="_blank"
              rel="noopener noreferrer"
            >
              {profile.github}
            </a>
          </span>
          {profile.website && (
            <span className="cv-header__contact cv-header__contact--url">
              <Globe className="cv-header__contact-icon" size={12} aria-hidden />
              <a
                href={profile.website}
                className="cv-link cv-link--url"
                target="_blank"
                rel="noopener noreferrer"
              >
                {profile.website}
              </a>
            </span>
          )}
        </div>
      </div>
      <img className="cv-header__photo" src={profile.photoSrc} alt="" decoding="sync" />
    </header>
  )
}
