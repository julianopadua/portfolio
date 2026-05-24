interface CvSectionProps {
  title: string
  compact?: boolean
  children: React.ReactNode
}

export function CvSection({ title, compact, children }: CvSectionProps) {
  return (
    <section className="cv-section cv-avoid-break">
      <h2 className={`cv-section-title${compact ? ' cv-section-title--compact' : ''}`}>{title}</h2>
      {children}
    </section>
  )
}
