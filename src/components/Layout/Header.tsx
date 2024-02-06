import React, { useContext } from 'react'
import Image from 'next/image'
import { Context } from '@/store/globalContext'
import ai from '../../../public/images/ai.png'

const Header: React.FC = () => {

  const { isVisible } = useContext(Context)

  return (
    <header className='w-[100%] flex flex-col items-center absolute bottom-[28rem]
    gap-5'>
      <Image src={ai} alt='AI assistant' className='w-40 h-40 object-cover
      rounded-full border-4 border-white shadow-md' />
      {isVisible ? <h1 className='text-[#E93A90] text-2xl font-bold
      absolute -bottom-12'>
        ¿Cómo puedo ayudarte hoy?
      </h1> : <></>}
    </header>
  )
}

export default Header
