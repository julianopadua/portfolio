import { ProjectGrid } from '../components/projects/ProjectGrid'
import { useLocale } from '../i18n/useLocale'
import { SectionTitle } from '../components/ui/SectionTitle'

export function ProjectsPage() {
  const { t } = useLocale()

  return (
    <>
      <SectionTitle as="h1">{t.projects.title}</SectionTitle>
      <ProjectGrid />
    </>
  )
}
