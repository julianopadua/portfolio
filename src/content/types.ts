export type UiMessages = {
  nav: { about: string; cv: string; projects: string }
  lang: { pt: string; en: string; switch: string }
  about: { title: string; intro: string; timeline: string; placeholder: string }
  cv: {
    title: string
    print: string
    education: string
    experience: string
    research: string
    projects: string
    skills: string
    softSkills: string
    hardSkills: string
    publications: string
    volunteering: string
    contact: string
    placeholder: string
  }
  projects: {
    title: string
    viewRepo: string
    viewDemo: string
    stack: string
    period: string
    status: { active: string; completed: string; archived: string; placeholder: string }
    empty: string
  }
  sidebar: { contact: string; links: string }
  timeline: {
    kinds: {
      education: string
      experience: string
      project: string
      research: string
      publication: string
      release: string
      other: string
    }
  }
}
