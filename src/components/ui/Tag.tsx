interface TagProps {
  children: React.ReactNode
  variant?: 'default' | 'muted'
}

export function Tag({ children, variant = 'default' }: TagProps) {
  const styles =
    variant === 'muted'
      ? 'bg-stone-100 text-stone-600'
      : 'bg-stone-200/60 text-stone-700'

  return (
    <span className={`inline-block rounded-sm px-2 py-0.5 text-xs tracking-wide ${styles}`}>
      {children}
    </span>
  )
}
