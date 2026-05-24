import { useLocale } from '../../i18n/useLocale'
import type { Locale } from '../../data/types'

export function LanguageToggle() {
  const { locale, setLocale, t } = useLocale()

  const options: { value: Locale; label: string }[] = [
    { value: 'pt', label: t.lang.pt },
    { value: 'en', label: t.lang.en },
  ]

  return (
    <div
      className="no-print flex items-center gap-1 text-xs uppercase tracking-widest"
      role="group"
      aria-label={t.lang.switch}
    >
      {options.map((opt, i) => (
        <span key={opt.value} className="flex items-center gap-1">
          {i > 0 && <span className="text-stone-300">|</span>}
          <button
            type="button"
            onClick={() => setLocale(opt.value)}
            className={`px-1 py-0.5 transition-colors ${
              locale === opt.value
                ? 'font-semibold text-[var(--color-ink)]'
                : 'text-[var(--color-muted)] hover:text-[var(--color-ink)]'
            }`}
            aria-pressed={locale === opt.value}
          >
            {opt.label}
          </button>
        </span>
      ))}
    </div>
  )
}
