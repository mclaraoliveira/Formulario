import React from "react";

const Iniciativa = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="iniciativaSetorial">Sua empresa pertence a qual iniciativa setorial?</label>
                <input
                    type="text"
                    name="iniciativaSetorial"
                    id="iniciativaSetorial"
                    placeholder="Digite a iniciativa setorial da sua empresa"
                    required
                    value={data.iniciativaSetorial || ""}
                    onChange={(e) => updateFieldHandler("iniciativaSetorial", e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="negocioImpacto">Sua empresa é um negócio de impacto?</label>
                <textarea
                    id="negocioImpacto"
                    name="negocioImpacto"
                    placeholder="Digite aqui"
                    required
                    rows="6"
                    value={data.negocioImpacto || ""}
                    onChange={(e) => updateFieldHandler("negocioImpacto", e.target.value)}
                />
            </div>
        </div>
    );
};

export default Iniciativa;

