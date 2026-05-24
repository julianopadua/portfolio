import { cvDocument } from '../../data/cv'
import { useLocale } from '../../i18n/useLocale'
import { Achievements } from './Achievements'
import { CertificationList } from './CertificationList'
import { CompactExperienceList } from './CompactExperienceList'
import { CvSection } from './CvSection'
import { EducationList } from './EducationList'
import { ExperienceBlock } from './ExperienceBlock'
import { Interests } from './Interests'
import { KnowledgePieChart } from './KnowledgePieChart'
import { LanguageRating } from './LanguageRating'
import { SkillChips } from './SkillChips'
import { VolunteerWork } from './VolunteerWork'

export function CvDocumentBodyPage1() {
  const { t } = useLocale()
  const { sections } = t.cv

  return (
    <div className="cv-grid-page-1">
      <div className="cv-col">
        <CvSection title={sections.professionalExperience}>
          <ExperienceBlock experiences={cvDocument.professionalExperience} />
        </CvSection>
        <CvSection title={sections.otherExperience} compact>
          <CompactExperienceList items={cvDocument.otherExperience} />
        </CvSection>
      </div>
      <div className="cv-col">
        <CvSection title={sections.skills}>
          <SkillChips skills={cvDocument.skills} />
        </CvSection>
        <CvSection title={sections.languages}>
          <LanguageRating languages={cvDocument.languages} />
        </CvSection>
        <CvSection title={sections.education}>
          <EducationList items={cvDocument.education} />
        </CvSection>
        <CvSection title={sections.certifications}>
          <CertificationList items={cvDocument.certifications} />
        </CvSection>
      </div>
    </div>
  )
}

export function CvDocumentBodyPage2() {
  const { t } = useLocale()
  const { sections } = t.cv

  return (
    <div className="cv-grid-page-2">
      <div className="cv-col">
        <CvSection title={sections.volunteering}>
          <VolunteerWork items={cvDocument.volunteering} />
        </CvSection>
        <CvSection title={sections.interests} compact>
          <Interests items={cvDocument.interests} />
        </CvSection>
      </div>
      <div className="cv-col">
        <CvSection title={sections.achievements}>
          <Achievements items={cvDocument.achievements} />
        </CvSection>
        <CvSection title={sections.knowledge}>
          <KnowledgePieChart slices={cvDocument.knowledge} summary={cvDocument.knowledgeSummary} />
        </CvSection>
      </div>
    </div>
  )
}
