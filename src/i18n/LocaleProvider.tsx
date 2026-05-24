import { useCallback, useEffect, useMemo, useState, type ReactNode } from 'react'
import { ui as uiEn } from '../content/en/ui'
import { ui as uiPt } from '../content/pt/ui'
import type { Locale } from '../data/types'
import type { UiMessages } from '../content/types'
import { LocaleContext, type LocaleContextValue } from './locale-context'

const STORAGE_KEY = 'portfolio-locale'

const uiByLocale: Record<Locale, UiMessages> = {
  pt: uiPt,
  en: uiEn,
}

function readStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'pt'
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === 'en' ? 'en' : 'pt'
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readStoredLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en'
  }, [locale])

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      t: uiByLocale[locale],
    }),
    [locale, setLocale],
  )

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}
