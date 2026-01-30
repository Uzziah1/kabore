'use client'

import { useContext, useState, useRef, useEffect } from 'react'
import { LanguageContext } from '@/providers/LanguageProvider'
import { languages } from '@/i18n/config'
import { FiChevronDown } from 'react-icons/fi'

export default function LanguageToggle() {
  const { language, setLanguage } = useContext(LanguageContext)
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Fermer le dropdown si clic en dehors
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const getLabel = (code: string) =>
    code === 'FR'
      ? 'Français'
      : languages.find((l) => l.code.toLowerCase() === code.toLowerCase())?.label

  return (
    <div className="relative" ref={ref}>
      {/* Desktop / tablette */}
      <div className="hidden sm:flex gap-2">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`px-3 py-1 text-sm font-medium ${
              language === lang.code
                ? 'text-[#3EB65F] underline underline-offset-4'
                  : 'text-white hover:text-[#3EB65F]'
            }`}
          >
            {getLabel(lang.code)}
          </button>
        ))}
      </div>

      {/* Mobile */}
      <div className="sm:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 px-3 py-1 text-white text-sm font-medium"
        >
          {getLabel(language)}
          <FiChevronDown />
        </button>

        {open && (
          <div className="absolute right-0 mt-1 w-32 bg-black/80 rounded shadow-md z-50">
            {languages
              .filter((l) => l.code !== language)
              .map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code)
                    setOpen(false)
                  }}
                  className="block w-full text-left px-3 py-2 text-white hover:bg-white/20 text-sm"
                >
                  {getLabel(lang.code)}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}
