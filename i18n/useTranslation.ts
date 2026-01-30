import { useContext } from 'react'
import { LanguageContext } from '@/providers/LanguageProvider'
import { translations } from './translations'

export function useTranslation() {
  const { language } = useContext(LanguageContext)

  function t(path: string) {
    return (
      path
        .split('.')
        .reduce((obj: any, key) => obj?.[key], translations[language])
      ?? path
    )
  }

  return { t, language }
}
