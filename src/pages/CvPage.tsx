import { CvDocument } from '../components/cv/CvDocument'
import { CvPrintActions } from '../components/cv/CvPrintActions'
import { useLocale } from '../i18n/useLocale'
import { SectionTitle } from '../components/ui/SectionTitle'

export function CvPage() {
  const { t } = useLocale()

  return (
    <>
      <SectionTitle as="h1">{t.cv.title}</SectionTitle>
      <CvPrintActions />
      <CvDocument />
    </>
  )
}
