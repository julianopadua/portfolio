import { createContext } from 'react'
import type { UiMessages } from '../content/types'
import type { Locale } from '../data/types'

export interface LocaleContextValue {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: UiMessages
}

export const LocaleContext = createContext<LocaleContextValue | null>(null)
