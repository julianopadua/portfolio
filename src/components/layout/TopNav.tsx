import { NavLink } from 'react-router-dom'
import { useLocale } from '../../i18n/useLocale'
import { LanguageToggle } from './LanguageToggle'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `text-xs uppercase tracking-[0.18em] transition-colors ${
    isActive
      ? 'font-semibold text-[var(--color-ink)]'
      : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
  }`

export function TopNav() {
  const { t } = useLocale()

  return (
    <header className="no-print border-b border-[var(--color-border)] bg-[var(--color-surface)]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <nav className="flex flex-wrap items-center gap-6" aria-label="Main">
          <NavLink to="/about" className={linkClass}>
            {t.nav.about}
          </NavLink>
          <NavLink to="/cv" className={linkClass}>
            {t.nav.cv}
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            {t.nav.projects}
          </NavLink>
        </nav>
        <LanguageToggle />
      </div>
    </header>
  )
}
