'use client'

import { useTranslation } from '@/i18n/useTranslation'
import LanguageToggle from './LanguageToggle'
import DateTime from './DateTime'

export default function Header() {
  const { t } = useTranslation()

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-sm">
      <div className="flex items-center justify-between w-full px-4 py-3 sm:py-4 max-w-full">
        {/* Logo */}
        <div className="text-lg font-bold text-white cursor-pointer flex-1">
          Uzziah
        </div>

        {/* Date & Heure – visible sm+ */}
        <div className="hidden sm:flex flex-1 justify-center text-sm text-white">
          <DateTime />
        </div>

        {/* Langues */}
        <div className="flex-1 flex justify-end">
          <LanguageToggle />
        </div>
      </div>
    </header>
  )
}
