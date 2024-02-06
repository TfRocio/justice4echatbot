import React from 'react'

interface InfoCardProps {
  question: string,
  answer: string
}

const InfoCard: React.FC<InfoCardProps> = ({question, answer}) => {
  return (
    <div className='h-32 bg-[#F491B0] rounded-xl shadow-md flex flex-col
    items-start gap-2 p-4 text-left overflow-hidden break-words whitespace-normal'>
      <h4 className='text-sm text-[#FCDDDF]'>
        {question}
      </h4>
      <p className='text-white text-xs'>
        {answer}
      </p>
    </div>
  )
}

export default InfoCard