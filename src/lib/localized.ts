import type { Locale, LocalizedString } from '../data/types'

export function pickLocalized(value: LocalizedString, locale: Locale): string {
  return value[locale] ?? value.pt
}
