import { Printer } from 'lucide-react'
import { printCv } from '../../lib/printCv'
import { useLocale } from '../../i18n/useLocale'

export function CvPrintActions() {
  const { t } = useLocale()

  return (
    <div className="cv-print-actions no-print mb-6">
      <button
        type="button"
        onClick={() => printCv()}
        className="inline-flex items-center gap-2 rounded-sm border border-[var(--color-border)] bg-white px-4 py-2 text-xs uppercase tracking-widest text-[var(--color-ink)] transition hover:bg-stone-50"
      >
        <Printer className="h-4 w-4" aria-hidden />
        {t.cv.print}
      </button>
    </div>
  )
}
