import React from "react";
import './Documento.css'

const Documento = ({ data, updateFieldHandler }) => {
    return (
        <div>
            <div className="form-control">
                <label htmlFor="documentType">Você deseja começar com:</label>
                <select
                    id="documentType"
                    name="documentType"
                    value={data.documentType || ""}
                    onChange={(e) => updateFieldHandler("documentType", e.target.value)}
                >
                    <option value="">Selecione...</option>
                    <option value="CPF">CPF</option>
                    <option value="CNPJ">CNPJ</option>
                </select>
            </div>

            {data.documentType === "CPF" && (
                <div className="form-control">
                    <label htmlFor="cpf">CPF:</label>
                    <input
                        type="text"
                        name="cpf"
                        id="cpf"
                        placeholder="Digite o seu CPF"
                        required
                        value={data.cpf || ""}
                        onChange={(e) => updateFieldHandler("cpf", e.target.value)}
                    />
                </div>
            )}

            {data.documentType === "CNPJ" && (
                <div className="form-control">
                    <label htmlFor="cnpj">CNPJ:</label>
                    <input
                        type="text"
                        name="cnpj"
                        id="cnpj"
                        placeholder="Digite o seu CNPJ"
                        required
                        value={data.cnpj || ""}
                        onChange={(e) => updateFieldHandler("cnpj", e.target.value)}
                    />
                </div>
            )}
        </div>
    );
};

export default Documento;
