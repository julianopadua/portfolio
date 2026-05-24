import { cvDocument } from '../../data/cv'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'
import { CvDocumentBodyPage1, CvDocumentBodyPage2 } from './CvDocumentBody'
import { CvHeader } from './CvHeader'

type CvDocumentVariant = 'embed' | 'print'

interface CvDocumentProps {
  variant: CvDocumentVariant
  id?: string
  className?: string
}

export function CvDocument({ variant, id, className = '' }: CvDocumentProps) {
  const { locale } = useLocale()
  const isPrint = variant === 'print'

  return (
    <div
      id={id}
      className={`cv-document cv-document--${variant} ${className}`.trim()}
      data-cv-variant={variant}
    >
      <div className="cv-page-sheet cv-page-sheet--1">
        <div className="cv-page-sheet__content">
          {isPrint && (
            <>
              <CvHeader profile={cvDocument.profile} />
              <p className="cv-summary">{pickLocalized(cvDocument.profile.summary, locale)}</p>
            </>
          )}
          <CvDocumentBodyPage1 />
        </div>
        {isPrint && (
          <footer className="cv-page-footer" aria-hidden>
            1
          </footer>
        )}
      </div>

      <div className="cv-page-sheet cv-page-sheet--2">
        <div className="cv-page-sheet__content">
          <CvDocumentBodyPage2 />
        </div>
        {isPrint && (
          <footer className="cv-page-footer" aria-hidden>
            2
          </footer>
        )}
      </div>
    </div>
  )
}
