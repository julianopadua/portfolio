export type Locale = 'pt' | 'en'

export type LocalizedString = Record<Locale, string>

export type TimelineKind =
  | 'education'
  | 'experience'
  | 'project'
  | 'research'
  | 'publication'
  | 'release'
  | 'other'

export interface TimelineEvent {
  id: string
  kind: TimelineKind
  start: string
  end?: string
  title: LocalizedString
  organization?: LocalizedString
  summary: LocalizedString
  href?: string
  tags?: string[]
  placeholder?: boolean
  logo?: string
  displayPeriod?: LocalizedString
  sortOrder?: number
}

export interface CvEntry {
  id: string
  title: LocalizedString
  organization?: LocalizedString
  location?: LocalizedString
  period: LocalizedString
  description: LocalizedString
  href?: string
  highlights?: LocalizedString[]
  placeholder?: boolean
}

export interface CvSkill {
  name: LocalizedString
  detail?: LocalizedString
}

export interface CvPublication {
  id: string
  title: LocalizedString
  authors?: LocalizedString
  venue?: LocalizedString
  year?: string
  href?: string
  placeholder?: boolean
}

export interface ProjectSitePreview {
  url: string
  title: LocalizedString
  description: LocalizedString
  imageUrl: string
}

export interface ProjectItem {
  id: string
  name: LocalizedString
  shortDescription: LocalizedString
  longDescription?: LocalizedString
  stack: string[]
  status: 'active' | 'completed' | 'archived' | 'placeholder'
  period?: string
  tags: string[]
  logo?: string
  sitePreview?: ProjectSitePreview
  links: {
    repository?: string
    demo?: string
    other?: { label: LocalizedString; href: string }[]
  }
  featured?: boolean
  /** Full-width spotlight card on the projects page (spans 2 columns). */
  hero?: boolean
  placeholder?: boolean
}

export interface Profile {
  name: string
  tagline: LocalizedString
  bio: LocalizedString[]
  location: LocalizedString
  email: string
  links: {
    github: string
    linkedin: string
    instagram?: string
  }
  phone?: string
}

export interface CvProfile {
  name: string
  headline: LocalizedString
  summary: LocalizedString
  photoSrc: string
  email: string
  phone?: string
  location: LocalizedString
  linkedin: string
  github: string
  website?: string
}

export interface CvExperienceRole {
  title: LocalizedString
  period?: LocalizedString
  bullets: LocalizedString[]
}

export interface CvExperience {
  id: string
  company: string
  href?: string
  location?: LocalizedString
  period: LocalizedString
  roles: CvExperienceRole[]
}

export interface CompactExperience {
  id: string
  company: string
  href?: string
  title: LocalizedString
  period: LocalizedString
  location?: LocalizedString
}

export interface SkillTag {
  label: LocalizedString
}

export interface LanguageSkill {
  language: LocalizedString
  levelLabel?: LocalizedString
  score: 1 | 2 | 3 | 4 | 5
}

export interface EducationItem {
  id: string
  degree: LocalizedString
  institution: LocalizedString
  period: LocalizedString
  location?: LocalizedString
  href?: string
}

export interface CertificationItem {
  id: string
  title: LocalizedString
  issuer: LocalizedString
  period: LocalizedString
}

export interface VolunteerItem {
  id: string
  organization: LocalizedString
  role: LocalizedString
  period: LocalizedString
  location?: LocalizedString
  href?: string
  bullets: LocalizedString[]
}

export interface InterestItem {
  id: string
  title: LocalizedString
  description: LocalizedString
}

export interface AchievementItem {
  id: string
  title: LocalizedString
  organization?: LocalizedString
  organizationHref?: string
  description: LocalizedString
  href?: string
}

export interface KnowledgeSlice {
  label: LocalizedString
  value: number
  color?: string
}

export interface CvDocumentData {
  profile: CvProfile
  professionalExperience: CvExperience[]
  otherExperience: CompactExperience[]
  skills: SkillTag[]
  languages: LanguageSkill[]
  education: EducationItem[]
  certifications: CertificationItem[]
  volunteering: VolunteerItem[]
  interests: InterestItem[]
  achievements: AchievementItem[]
  knowledge: KnowledgeSlice[]
  knowledgeSummary: LocalizedString
}
