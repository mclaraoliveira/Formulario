import React from "react";

const Veracidade = ({ data, updateFieldHandler }) => {
    return (
        <div>            
            <div className="form-control">
                <label>Você busca criar uma patente na SoftexLabs?</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="patente"
                            value="sim"
                            checked={data.patente === "sim"}
                            onChange={(e) => updateFieldHandler("patente", e.target.value)}
                        />
                        Sim
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="patente"
                            value="nao"
                            checked={data.patente === "nao"}
                            onChange={(e) => updateFieldHandler("patente", e.target.value)}
                        />
                        Não
                    </label>
                </div>
            </div>

            <div className="form-control">
                <p>Confirme a veracidade das informações repassadas no formulário para seguir adiante:</p>
                <button type="button" onClick={() => alert("Informações confirmadas!")}>
                    Confirmar
                </button>
            </div>
        </div>
    );
};

export default Veracidade;
