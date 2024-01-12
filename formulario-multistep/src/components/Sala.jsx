import React, { useState } from "react";

const Sala = ({ data, updateFieldHandler }) => {
    const [quantidadePessoas, setQuantidadePessoas] = useState("");
    const [diaHorario, setDiaHorario] = useState("");
    const [finalidade, setFinalidade] = useState("");

    const handleSelectChange = (field, e) => {
        if (field === "quantidadePessoas") {
            setQuantidadePessoas(e.target.value);
        }
    };

    return (
        <div>
            <div className="form-control">
                <label htmlFor="quantidadePessoas">Quantas pessoas utilizarão a sala?</label>
                <select
                    id="quantidadePessoas"
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
                <label htmlFor="diaHorario">Descreva dia e horário:</label>
                <input
                    type="text"
                    id="diaHorario"
                    name="diaHorario"
                    placeholder="Digite dia e horário"
                    value={diaHorario}
                    onChange={(e) => setDiaHorario(e.target.value)}
                />
            </div>
        </div>
    );
};

export default Sala;
