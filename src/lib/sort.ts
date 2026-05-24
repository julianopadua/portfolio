/** Sort timeline/events by start date descending (newest first). */
export function sortByStartDesc<T extends { start: string }>(items: T[]): T[] {
  return [...items].sort((a, b) => b.start.localeCompare(a.start))
}
