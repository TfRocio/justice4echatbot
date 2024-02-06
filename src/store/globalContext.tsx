'use client'

import React, { createContext, ReactNode, useState,
  useEffect  } from 'react'
import { MessageData } from '@/types'

export const Context = createContext<any>('')

interface Props {
  children: ReactNode
}

export const ContextProvider: React.FC<Props> = ({children}) => {

  const [messages, setMessages] = useState<MessageData[]>([])
  const [isVisible, setIsVisible] = useState<boolean>(true)

  const handleSendMessage = (userMessage: string) => {
    const sendMessage = async () => {
      try {
        const response = await fetch(
          `https://chatbotest-2bwmhayk7q-ew.a.run.app/responseChatbot?user_input=${encodeURIComponent(userMessage)}`
          )
        
        if (!response.ok) {
          throw new Error('Failed to fetch data from the server')
        }
  
        const responseData = await response.json()
        console.log(responseData)
  
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: responseData.user_input, sender: 'user' },
          { text: responseData.answer, sender: 'bot' },
        ])
  
        setIsVisible(false)
      } catch (error: any) {
        console.error('Error:', error.message)
      }
    }
  
    sendMessage()
  }

  const fetchInitialChatHistory = async () => {  
    try {

      const initialHistoryResponse = await fetch('https://your-backend-url/initial-chat-history-endpoint')

      if (!initialHistoryResponse.ok) {
        throw new Error('Failed to fetch initial chat history from the server')
      }

      const initialHistoryData = await initialHistoryResponse.json()

      setMessages(initialHistoryData)

    } catch (error: any) {
      console.error('Error:', error.message)
    }
  }

  useEffect(() => { 

    // fetchInitialChatHistory()

  }, [])


  return (
    <Context.Provider 
      value={{ messages, isVisible, handleSendMessage }}>
      {children}
    </Context.Provider>
    )
}