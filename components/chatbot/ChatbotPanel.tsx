'use client'

import { useChatbot } from './ChatbotProvider'
import { FiX, FiSend } from 'react-icons/fi'
import { useState, useRef, useEffect } from 'react'

export default function ChatbotPanel() {
  const { isOpen, closeChat } = useChatbot()
  const [messages, setMessages] = useState<{ sender: 'user' | 'bot'; text: string }[]>([])
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [messages])

  if (!isOpen) return null

  const handleSend = async () => {
    if (!message.trim()) return

    const userMessage = message
    setMessages((prev) => [...prev, { sender: 'user', text: userMessage }])
    setMessage('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage }),
      })

      const data = await res.json()
      if (data.reply) {
        setMessages((prev) => [...prev, { sender: 'bot', text: data.reply }])
      }
    } catch (err) {
      console.error(err)
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Erreur, réessaie plus tard.' }])
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend()
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-xs sm:max-w-sm">
      {/* Panel */}
      <div className="bg-[#3EB65F]/10 backdrop-blur-md rounded-2xl shadow-xl flex flex-col h-[500px]">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/20">
          <span className="font-medium text-white">Chat avec Azaria</span>
          <button onClick={closeChat}>
            <FiX size={20} className="text-white" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-2">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-md max-w-[80%] ${
                msg.sender === 'user' ? 'self-end bg-white/20 text-black' : 'self-start bg-[#3EB65F]/20 text-white'
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="self-start bg-[#3EB65F]/20 text-white p-2 rounded-md max-w-[80%] animate-pulse">
              ...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="flex items-center p-3 border-t border-white/20 gap-2">
          <input
            type="text"
            placeholder="Écris un message..."
            className="flex-1 bg-transparent border rounded-full px-4 py-2 text-white placeholder-white/50 focus:outline-none"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            className="p-2 rounded-full bg-[#3EB65F] hover:bg-[#3EB65F]/80 transition"
          >
            <FiSend className="text-white" />
          </button>
        </div>
      </div>
    </div>
  )
}
