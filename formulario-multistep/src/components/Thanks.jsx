import React from 'react'
import './Thanks.css'
import softexLabs from '../imagens/logo.png'

const Thanks = () => {
    return (
      <div className="thanks-container">
        <img src={softexLabs} alt="" />
        <h2>Obrigado pelo cadastro para uso da SoftexLabs, retornaremos em breve</h2>
      </div>
  )
}

export default Thanks
