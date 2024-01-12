import './App.css';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FiSend } from 'react-icons/fi';
import Inicio from './components/Inicio';
import Documento from './components/Documento';
import Sala from './components/Sala';
import Finalidade from './components/Finalidade';
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
    <Inicio data={data} updateFieldHandler={updateFieldHandler} />,
    <Documento data={data} updateFieldHandler={updateFieldHandler} />,
    <Sala data={data} updateFieldHandler={updateFieldHandler} />,
    <Finalidade data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />
  ];
  
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } = useForm(formComponents)

  return (
    <div className="app">

      <div className="form-container">

        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep && (
              <button type="button" onClick={() => changeStep(currentStep - 1)} className="custom-button">
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            )}
            {!isLastStep ? (
              <button type="submit" className="custom-button">
                <span>Avançar</span>
                <GrFormNext />
              </button>
            ) : (
              <button type="button" className="custom-button">
                <span>Enviar</span>
                <FiSend />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}


export default App
