import { Mail, MapPin, Phone } from 'lucide-react'
import { profile } from '../../data/profile'
import { publicAsset } from '../../lib/assets'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'

const socialIcons = {
  github: publicAsset('icons/githubclaro.png'),
  linkedin: publicAsset('icons/linkedinclaro.png'),
  instagram: publicAsset('icons/instaclaro.png'),
} as const

export function Sidebar() {
  const { locale, t } = useLocale()
  const tagline = pickLocalized(profile.tagline, locale)
  const location = pickLocalized(profile.location, locale)

  return (
    <aside className="no-print lg:sticky lg:top-8 lg:self-start">
      <div className="flex flex-col items-center border border-[var(--color-border)] bg-white/50 p-6 text-center lg:items-start lg:text-left">
        <img
          src={publicAsset('imgs/new-img.png')}
          alt={profile.name}
          className="mb-4 h-36 w-36 rounded-full border border-[var(--color-border)] object-cover"
          width={144}
          height={144}
        />
        <h1 className="font-serif text-2xl font-semibold tracking-tight">{profile.name}</h1>
        <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">{tagline}</p>
        <p className="mt-3 flex items-center justify-center gap-1 text-xs text-[var(--color-muted)] lg:justify-start">
          <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden />
          {location}
        </p>

        <div className="mt-6 w-full border-t border-[var(--color-border)] pt-4">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {t.sidebar.contact}
          </p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-[var(--color-ink)] hover:underline"
              >
                <Mail className="h-4 w-4" aria-hidden />
                {profile.email}
              </a>
            </li>
            {profile.phone && (
              <li>
                <a
                  href={`tel:${profile.phone.replace(/\s/g, '')}`}
                  className="inline-flex items-center gap-2 text-[var(--color-muted)] hover:text-[var(--color-ink)]"
                >
                  <Phone className="h-4 w-4" aria-hidden />
                  {profile.phone}
                </a>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-4 w-full border-t border-[var(--color-border)] pt-4">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {t.sidebar.links}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <li>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition hover:opacity-100"
                aria-label="GitHub"
              >
                <img
                  src={socialIcons.github}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </a>
            </li>
            <li>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="opacity-80 transition hover:opacity-100"
                aria-label="LinkedIn"
              >
                <img
                  src={socialIcons.linkedin}
                  alt=""
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </a>
            </li>
            {profile.links.instagram && (
              <li>
                <a
                  href={profile.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="opacity-80 transition hover:opacity-100"
                  aria-label="Instagram"
                >
                  <img
                    src={socialIcons.instagram}
                    alt=""
                    width={28}
                    height={28}
                    className="h-7 w-7 object-contain"
                  />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </aside>
  )
}
