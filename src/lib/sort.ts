/** Sort timeline/events by start date descending (newest first). */
export function sortByStartDesc<T extends { start: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.start.localeCompare(a.start))
}

/** Sort timeline/events by start date ascending (oldest first). */
export function sortByStartAsc<T extends { start: string; sortOrder?: number }>(
  items: T[],
): T[] {
  return [...items].sort((a, b) => {
    const byStart = a.start.localeCompare(b.start)
    if (byStart !== 0) return byStart
    return (a.sortOrder ?? 0) - (b.sortOrder ?? 0)
  })
}
