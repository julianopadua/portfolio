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

export interface ProjectItem {
  id: string
  name: LocalizedString
  shortDescription: LocalizedString
  longDescription?: LocalizedString
  stack: string[]
  status: 'active' | 'completed' | 'archived' | 'placeholder'
  period?: string
  tags: string[]
  links: {
    repository?: string
    demo?: string
    other?: { label: LocalizedString; href: string }[]
  }
  featured?: boolean
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
