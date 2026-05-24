export type UiMessages = {
  nav: { about: string; cv: string; projects: string }
  lang: { pt: string; en: string; switch: string }
  about: { title: string; intro: string; timeline: string; placeholder: string }
  cv: {
    title: string
    print: string
    sections: {
      professionalExperience: string
      otherExperience: string
      skills: string
      languages: string
      education: string
      certifications: string
      achievements: string
      volunteering: string
      knowledge: string
      interests: string
    }
  }
  projects: {
    title: string
    viewRepo: string
    viewDemo: string
    viewSite: string
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
