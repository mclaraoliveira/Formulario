import React from 'react';
import './Inicio.css';
import softexLabs from '../imagens/logo.png'

const Inicio = () => {
  return (
    <div className='container'>
      <img src={softexLabs} alt="" />
      <h2>Formulário de inscrição para uso do SoftexLabs</h2>
      <p>Insira seus dados a seguir para fazer a reserva da sala!</p>
    </div>
  );
};

export default Inicio;
