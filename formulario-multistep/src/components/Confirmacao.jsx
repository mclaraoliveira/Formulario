import React from "react";

const Confirmacao = ({ data, updateFieldHandler }) => {
    return (
        <div>            
            <div className="form-control">
                <label>Sua empresa faz parte do Softex?</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="softex"
                            value="sim"
                            checked={data.softex === "sim"}
                            onChange={(e) => updateFieldHandler("softex", e.target.value)}
                        />
                        Sim
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="softex"
                            value="nao"
                            checked={data.softex === "nao"}
                            onChange={(e) => updateFieldHandler("softex", e.target.value)}
                        />
                        Não
                    </label>
                </div>
            </div>

            <div className="form-control">
                <label>Conhece o Match Day?</label>
                <div>
                    <label>
                        <input
                            type="radio"
                            name="matchDay"
                            value="sim"
                            checked={data.matchDay === "sim"}
                            onChange={(e) => updateFieldHandler("matchDay", e.target.value)}
                        />
                        Sim
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="matchDay"
                            value="nao"
                            checked={data.matchDay === "nao"}
                            onChange={(e) => updateFieldHandler("matchDay", e.target.value)}
                        />
                        Não
                    </label>
                </div>
            </div>

            {data.matchDay === "nao" && (
                <div className="form-control">
                    <p><a href="https://softexpe.org.br/eventos-de-conexao-com-o-mercado/">Se inscreva para o Match Day!</a></p>
                </div>
            )}
        </div>
    );
};

export default Confirmacao;
