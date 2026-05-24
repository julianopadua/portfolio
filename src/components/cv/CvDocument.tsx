import { profile } from '../../data/profile'
import {
  cvEducation,
  cvExperience,
  cvHardSkills,
  cvProjectsHighlight,
  cvPublications,
  cvResearch,
  cvSoftSkills,
  cvVolunteering,
} from '../../data/cv'
import { pickLocalized } from '../../lib/localized'
import { useLocale } from '../../i18n/useLocale'
import { CvEntryList, CvPublicationList, CvSectionBlock, CvSkillList } from './CvSection'

export function CvDocument() {
  const { locale, t } = useLocale()

  return (
    <div
      id="cv-print"
      className="rounded-sm border border-[var(--color-border)] bg-white p-6 sm:p-8 print:border-0 print:p-0"
    >
      <header className="print-only mb-6 hidden border-b border-[var(--color-border)] pb-4">
        <h1 className="font-serif text-2xl font-semibold">{profile.name}</h1>
        <p className="text-sm text-[var(--color-muted)]">{pickLocalized(profile.tagline, locale)}</p>
        <p className="text-sm">{profile.email}</p>
      </header>

      <CvSectionBlock title={t.cv.education}>
        <CvEntryList entries={cvEducation} />
      </CvSectionBlock>

      <CvSectionBlock title={t.cv.experience}>
        <CvEntryList entries={cvExperience} />
      </CvSectionBlock>

      <CvSectionBlock title={t.cv.research}>
        <CvEntryList entries={cvResearch} />
      </CvSectionBlock>

      <CvSectionBlock title={t.cv.projects}>
        <CvEntryList entries={cvProjectsHighlight} />
      </CvSectionBlock>

      <CvSectionBlock title={t.cv.skills}>
        <h3 className="mb-2 text-sm font-medium">{t.cv.softSkills}</h3>
        <CvSkillList skills={cvSoftSkills} ordered />
        <h3 className="mb-2 mt-4 text-sm font-medium">{t.cv.hardSkills}</h3>
        <CvSkillList skills={cvHardSkills} />
      </CvSectionBlock>

      {cvPublications.length > 0 && (
        <CvSectionBlock title={t.cv.publications}>
          <CvPublicationList items={cvPublications} />
        </CvSectionBlock>
      )}

      {cvVolunteering.length > 0 && (
        <CvSectionBlock title={t.cv.volunteering}>
          <CvEntryList entries={cvVolunteering} />
        </CvSectionBlock>
      )}

      <CvSectionBlock title={t.cv.contact}>
        <ul className="text-sm space-y-1">
          <li>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </li>
          {profile.phone && <li>{profile.phone}</li>}
          <li>{pickLocalized(profile.location, locale)}</li>
          <li>
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            {' · '}
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </CvSectionBlock>
    </div>
  )
}
