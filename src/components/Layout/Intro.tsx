import React from 'react'
import InfoCard from './InfoCard'
import DescriptionCard from './DescriptionCard'

const Intro: React.FC = () => {
  return (
    <div className='w-[100%] absolute bottom-[7rem] grid grid-cols-2 max-[650px]:h-[20rem]
    grid-rows-2 gap-2 max-[650px]:grid-rows-3 max-[650px]:grid-cols-1'>
      <DescriptionCard title='Chatbot de Tránsito - Ciudad de México' description='¡Hola! Soy 
      un asistente virtual llamado Pepe, que sabe todo sobre el Reglamento de Tránsito de la 
      Ciudad de México. ¡Hazme una pregunta!' />
      <InfoCard question='¿Cuál es la multa por estacionarse en un lugar prohibido?'
      answer='La multa por estacionarse en un lugar prohibido puede variar, pero generalmente 
      es de alrededor de 700 pesos.' />
      <InfoCard question='¿Cuál es la velocidad máxima permitida en las avenidas principales?'
      answer='La velocidad máxima permitida en las avenidas principales de la Ciudad de México 
      es de 50 km/h, a menos que se indique lo contrario.' />
    </div>
  )
}

export default Intro