import type { ReactNode } from 'react'

interface SectionTitleProps {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  id?: string
}

export function SectionTitle({
  children,
  as: Tag = 'h2',
  className = '',
  id,
}: SectionTitleProps) {
  return (
    <Tag
      id={id}
      className={`mb-6 border-b border-[var(--color-border)] pb-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)] ${className}`}
    >
      {children}
    </Tag>
  )
}
