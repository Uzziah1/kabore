'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

type ChatbotContextType = {
  isOpen: boolean
  openChat: () => void
  closeChat: () => void
}

const ChatbotContext = createContext<ChatbotContextType | null>(null)

export function ChatbotProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ChatbotContext.Provider
      value={{
        isOpen,
        openChat: () => setIsOpen(true),
        closeChat: () => setIsOpen(false),
      }}
    >
      {children}
    </ChatbotContext.Provider>
  )
}

export function useChatbot() {
  const context = useContext(ChatbotContext)
  if (!context) throw new Error('useChatbot must be used inside ChatbotProvider')
  return context
}
