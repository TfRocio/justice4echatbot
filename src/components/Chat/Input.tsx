import React, { useState, ChangeEvent } from 'react'
import { BsSend } from 'react-icons/bs'

interface InputProps {
  onSendMessage: (message: string) => void
}

const Input: React.FC<InputProps> = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleSendClick = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText)
      setInputText('')
    }
  }

  return (
    <div className="absolute bottom-[3rem] flex flex-row
    justify-between w-[100%] gap-3">
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        placeholder="Ingresa tu pregunta aquí..."
        className="w-[100%] left-0 text-lg bg-white
        p-[.75rem] pl-4 rounded-full shadow-md"
      />
      <button onClick={handleSendClick} className="w-[57.4px]
      h-[52px] text-white rounded-full
      text-2xl shadow-md flex justify-center items-center
      bg-gradient-to-tr from-[#FA7F4C] to-[#FB8F63]">
        <BsSend className='mr-[.25rem]' />
      </button>
    </div>
  )
}

export default Input
