import React, { useState } from "react";

const Info1 = ({ data, updateFieldHandler }) => {
    const [numeroDeFuncionarios, setNumeroDeFuncionarios] = useState("");
    const [funcaoNaEmpresa, setFuncaoNaEmpresa] = useState("");

    const handleSelectChange = (field, e) => {
        if (field === "numeroDeFuncionarios") {
            setNumeroDeFuncionarios(e.target.value);
        } else if (field === "funcaoNaEmpresa") {
            setFuncaoNaEmpresa(e.target.value);
        }
    };

    return (
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome da empresa:</label>
                <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Digite o nome da sua empresa"
                    required
                    value={data.name || ""}
                    onChange={(e) => updateFieldHandler("name", e.target.value)}
                />
            </div>

            <div className="form-control">
                <label htmlFor="PerguntaFuncionarios">Quantos funcionários?</label>
                <select
                    id="PerguntaFuncionarios"
                    value={numeroDeFuncionarios}
                    onChange={(e) => handleSelectChange("numeroDeFuncionarios", e)}
                >
                    <option value="">Selecione...</option>
                    <option value="4-10">4 a 10</option>
                    <option value="11-30">11 a 30</option>
                    <option value="31-50">31 a 50</option>
                    <option value="50+">50+</option>
                    <option value="100+">100+</option>
                </select>

                {numeroDeFuncionarios && (
                    <div>
                        <p>Você selecionou: {numeroDeFuncionarios} funcionários.</p>
                    </div>
                )}
            </div>

            <div className="form-control">
                <label htmlFor="funcaoNaEmpresa">Qual a sua função na empresa?</label>
                <select
                    id="funcaoNaEmpresa"
                    value={funcaoNaEmpresa}
                    onChange={(e) => handleSelectChange("funcaoNaEmpresa", e)}
                >
                    <option value="">Selecione...</option>
                    <option value="CEO">CEO</option>
                    <option value="Senior">Senior</option>
                    <option value="Founder">Founder</option>
                    <option value="Junior">Junior</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Representante">Representante</option>
                    <option value="Outros">Outros</option>
                </select>

                {funcaoNaEmpresa && (
                    <div>
                        <p>Sua função na empresa é: {funcaoNaEmpresa}.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Info1;

