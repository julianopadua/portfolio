import { CvDocument } from '../components/cv/CvDocument'
import { CvPrintActions } from '../components/cv/CvPrintActions'
import { SectionTitle } from '../components/ui/SectionTitle'
import { useLocale } from '../i18n/useLocale'

export function CvPage() {
  const { t } = useLocale()

  return (
    <div className="cv-page">
      <div className="no-print mb-6">
        <SectionTitle as="h1">{t.cv.title}</SectionTitle>
        <CvPrintActions />
      </div>
      <CvDocument />
    </div>
  )
}
