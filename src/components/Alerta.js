import React from 'react'

const Alerta = ({alerta}) => {
  return (
    <div className={`${alerta.error ? 'bg-red-400' : 'bg-blue-500'} text-center rounded p-3 mb-4 text-white uppercase font-bold`}>
      <p>{alerta.msg}</p>
    </div>
  )
}

export default Alerta
