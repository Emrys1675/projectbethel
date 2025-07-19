import React, { createContext, useContext, useState } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
  timestamp: Date
}

interface AIContextType {
  messages: Message[]
  isOpen: boolean
  isTyping: boolean
  sendMessage: (text: string) => Promise<void>
  toggleChat: () => void
  clearChat: () => void
}

const AIContext = createContext<AIContextType | undefined>(undefined)

export const useAI = () => {
  const context = useContext(AIContext)
  if (context === undefined) {
    throw new Error('useAI must be used within an AIProvider')
  }
  return context
}

export const AIProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm your AI health assistant. I'm here to help you navigate the platform, understand your symptoms, and guide you to the right care. How can I assist you today?",
      sender: 'ai',
      timestamp: new Date()
    }
  ])
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setIsTyping(true)

    // Simulate AI response
    await new Promise(resolve => setTimeout(resolve, 1500))

    const aiResponse = generateAIResponse(text)
    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: aiResponse,
      sender: 'ai',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, aiMessage])
    setIsTyping(false)
  }

  const generateAIResponse = (userText: string): string => {
    const lowerText = userText.toLowerCase()
    
    if (lowerText.includes('headache') || lowerText.includes('head')) {
      return "I understand you're experiencing headaches. Let me ask a few questions to better understand your symptoms:\n\n1. How long have you been experiencing these headaches?\n2. On a scale of 1-10, how would you rate the pain?\n3. Are there any triggers you've noticed?\n\nBased on your symptoms, I'd recommend consulting with a neurologist or general physician. Would you like me to help you book a consultation?"
    }
    
    if (lowerText.includes('fever') || lowerText.includes('temperature')) {
      return "Fever can be a sign of various conditions. Have you measured your temperature? Are you experiencing any other symptoms like chills, body aches, or fatigue?\n\nI recommend seeing a general physician for proper evaluation. Shall I help you find available doctors in your area?"
    }
    
    if (lowerText.includes('book') || lowerText.includes('appointment') || lowerText.includes('consultation')) {
      return "I'd be happy to help you book a consultation! Here are the available options:\n\n• General Medicine\n• Pediatrics\n• Cardiology\n• Dermatology\n• Mental Health\n\nWhich specialty would you like to book with? I can also filter by language preference and availability."
    }
    
    if (lowerText.includes('records') || lowerText.includes('medical history')) {
      return "Your medical records are securely stored and can be accessed from the 'Medical Records' section. You can:\n\n• View your consultation history\n• Download medical reports\n• Share records with healthcare providers\n• Update your medical information\n\nWould you like me to guide you to your records?"
    }
    
    if (lowerText.includes('help') || lowerText.includes('how')) {
      return "I'm here to help you with:\n\n• Understanding symptoms and suggesting appropriate care\n• Booking consultations with doctors\n• Navigating your medical records\n• General health information\n• Platform guidance\n\nWhat specific area would you like assistance with?"
    }
    
    return "Thank you for sharing that with me. I'm here to provide health guidance and help you navigate our platform. Could you tell me more about what you're looking for today? Whether it's booking a consultation, understanding symptoms, or accessing your medical records, I'm here to help!"
  }

  const toggleChat = () => setIsOpen(!isOpen)
  const clearChat = () => setMessages([messages[0]]) // Keep welcome message

  return (
    <AIContext.Provider value={{ messages, isOpen, isTyping, sendMessage, toggleChat, clearChat }}>
      {children}
    </AIContext.Provider>
  )
}
