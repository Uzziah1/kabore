'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/i18n/useTranslation'

export default function DateTime() {
  const { language } = useTranslation()
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatted = new Intl.DateTimeFormat(language, {
    year: 'numeric',
    month: language === 'zh' ? 'numeric' : 'long',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: language === 'en' // AM/PM pour l’anglais
  }).format(now)

  return <span>{formatted}</span>
}
