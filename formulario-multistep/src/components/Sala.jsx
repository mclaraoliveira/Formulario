import React, { useState } from "react";
import './Sala.css'

const Sala = ({ data, updateFieldHandler }) => {
    const [quantidadePessoas, setQuantidadePessoas] = useState("");
    const [dataSelecionada, setDataSelecionada] = useState('');
    const [horarioSelecionado, setHorarioSelecionado] = useState('');

    const handleDataChange = (event) => {
      setDataSelecionada(event.target.value);
    };

    const handleSelectChange = (field, e) => {
        if (field === "quantidadePessoas") {
            setQuantidadePessoas(e.target.value);
        }
    };

    const handleHorarioChange = (event) => {
        setHorarioSelecionado(event.target.value);
      };

    return (
        <div>
            <div className="form-control">
                <label htmlFor="quantidadePessoas">Quantas pessoas utilizarão a sala?</label>
                <select
                    id="quantidadePessoas"
                    required
                    value={quantidadePessoas}
                    onChange={(e) => handleSelectChange("quantidadePessoas", e)}
                >
                    <option value="">Selecione...</option>
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
                        <option key={number} value={number}>
                            {number}
                        </option>
                    ))}
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="diaHorario">Escolha a data:</label>
                <input
                    type="date"
                    id="dataInput"
                    required
                    name="dataInput"
                    value={dataSelecionada}
                    onChange={handleDataChange}
                />
            </div>

            <div className="horario-container">
                <label htmlFor="horarioInput">Selecione um horário:</label>
                <input
                    type="time"
                    id="horarioInput"
                    required
                    name="horarioInput"
                    value={horarioSelecionado}
                    onChange={handleHorarioChange}
                    className="horario-input"
                />
                </div>

        </div>
    );
};

export default Sala;
