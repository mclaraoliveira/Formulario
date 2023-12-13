import React from "react";
import "./Thanks.css";

const Thanks = ({ data, updateFieldHandler }) => {
    return (
        <div className="thanks-container">
            <h2>Obrigado pelo cadastro para uso da SoftexLabs, retornaremos em breve</h2>

            <div className="form-control">
                <label>Deseja receber nosso newsletter?</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="newsletter"
                            value="sim"
                            checked={data.newsletter === "sim"}
                            onChange={(e) => updateFieldHandler("newsletter", e.target.value)}
                        />
                        Sim
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="newsletter"
                            value="nao"
                            checked={data.newsletter === "nao"}
                            onChange={(e) => updateFieldHandler("newsletter", e.target.value)}
                        />
                        Não
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Thanks;
