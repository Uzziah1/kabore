import './globals.css'
import { LanguageProvider } from '@/providers/LanguageProvider'
import { ChatbotProvider } from '@/components/chatbot/ChatbotProvider'
import Header from '@/components/header/Header'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-black text-white">
        <LanguageProvider>
          <ChatbotProvider>
          <Header />
          {children}
          </ChatbotProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
