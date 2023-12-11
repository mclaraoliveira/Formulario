import './App.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Documento from './components/Documento';
import Confirmacao from './components/Confirmacao';
import Info1 from './components/Info1';
import Iniciativa from './components/Iniciativa';
import Sala from './components/Sala';
import Thanks from "./components/Thanks";
import { useForm } from "./hooks/useForm";
import Steps from './components/Steps';
import { useState } from "react";


const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {

  const [data, setData] = useState(formTemplate)

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };
  

  const formComponents = [
    <Documento data={data} updateFieldHandler={updateFieldHandler} />,
    <Confirmacao data={data} updateFieldHandler={updateFieldHandler} />,
    <Info1 data={data} updateFieldHandler={updateFieldHandler} />,
    <Iniciativa data={data} updateFieldHandler={updateFieldHandler} />,
    <Sala data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ];
  
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
      <div className="app">
        <div className="header">
          <h2>Questionário para Empresas</h2>
          <p>Insira as informações requeridas abaixo para se cadastrar para uso da SoftexLabs</p>
        </div>
        <div className="form-container">
          <Steps currentStep={currentStep}/>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious/>
                <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (<button type="submit">
                <span>Avançar</span>
                <GrFormNext/>
                </button>) : (<button type="button">
                <span>Enviar</span>
                <FiSend/>
                </button>)}
            </div>
          </form>
        </div>
      </div>
  )
}

export default App
