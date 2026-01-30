export type Language = 'fr' | 'en' | 'zh'

export const defaultLanguage: Language = 'fr'

export const languages: { code: Language; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
  { code: 'zh', label: '中文' }
]
