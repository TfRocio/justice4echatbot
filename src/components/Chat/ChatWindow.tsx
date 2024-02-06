import React from 'react'
import Message from './Message'
import { MessageData } from '@/types'


interface ChatWindowProps {
  messages: MessageData[]
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => (
  <div className='w-[100%] absolute bottom-[7rem]'>
    {messages.map((message, index) => (
      <Message key={index} text={message.text} sender={message.sender} />
    ))}
  </div>
)

export default ChatWindow
