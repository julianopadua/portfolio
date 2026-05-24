interface CardProps {
  children: React.ReactNode
  className?: string
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <article
      className={`rounded-sm border border-[var(--color-border)] bg-white/60 p-5 shadow-sm ${className}`}
    >
      {children}
    </article>
  )
}
