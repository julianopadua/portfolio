import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
  if (projects.length === 0) return null

  const hero = projects.find((p) => p.hero)
  const rest = projects
    .filter((p) => !p.hero)
    .sort((a, b) => {
      if (a.featured && !b.featured) return -1
      if (!a.featured && b.featured) return 1
      return (b.period ?? '').localeCompare(a.period ?? '')
    })

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {hero && <ProjectCard key={hero.id} project={hero} variant="hero" />}
      {rest.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
