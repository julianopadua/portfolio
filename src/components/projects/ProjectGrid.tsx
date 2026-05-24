import { projects } from '../../data/projects'
import { ProjectCard } from './ProjectCard'

export function ProjectGrid() {
  if (projects.length === 0) return null

  const sorted = [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1
    if (!a.featured && b.featured) return 1
    return (b.period ?? '').localeCompare(a.period ?? '')
  })

  return (
    <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2">
      {sorted.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
