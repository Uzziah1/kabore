'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa'
import { FiMessageCircle } from 'react-icons/fi'
import { useChatbot } from '@/components/chatbot/ChatbotProvider'

export default function Hero() {
  const { t } = useTranslation()
  const { openChat } = useChatbot()

  return (
    <section
      className="relative h-screen flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: `url('/cover.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Contenu central */}
      <div className="relative z-10 max-w-3xl px-4 sm:px-6">
        <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          {t('hero.welcome')}
        </h1>

        {/* Phrase présentation avec métiers en couleur */}
        <p className="text-white/80 text-sm sm:text-base md:text-lg mb-8">
          {t('hero.intro')}{' '}
          <span className="text-[#3EB65F] font-medium">{t('hero.job1')}</span>,{' '}
          <span className="text-[#3EB65F] font-medium">{t('hero.job2')}</span>{' '}
          {t('hero.and')}{' '}
          <span className="text-[#3EB65F] font-medium">{t('hero.job3')}</span>
        </p>

        {/* CTA */}
        <button
          className="
            px-8 py-3
            rounded-[20px]
            border border-white
            text-white font-semibold
            transition-all duration-300
            hover:bg-[#3EB65F]
            hover:border-[#3EB65F]
            hover:text-black
          "
        >
          {t('hero.cta')}
        </button>
      </div>

      {/* Footer intégré */}
      <div className="absolute bottom-4 left-0 w-full z-10 px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">

          {/* Avatar */}
          <div className="flex items-center gap-3">
            <img
              src="/avatar.jpg"
              alt="Avatar"
              className="w-10 h-10 rounded-full object-cover border-2 border-white"
            />
            <span className="text-white font-medium">Azaria</span>
          </div>

          {/* Chatbot (centre & animé) */}
          <button
            onClick={openChat}
            aria-label="Chatbot"
            className="text-[#3EB65F] text-4xl sm:text-5xl animate-bounce hover:text-white transition"
          >
            <FiMessageCircle />
          </button>

          {/* Contacts */}
          <div className="flex items-center gap-6 text-lg">
            <a
              href="mailto:tonemail@example.com"
              className="text-[#3EB65F] hover:text-white transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/tonprofil"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3EB65F] hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/tonnumero"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3EB65F] hover:text-white transition"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
