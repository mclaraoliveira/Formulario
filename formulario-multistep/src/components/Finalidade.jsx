import React, { useState } from "react";

const Finalidade = ({ data, updateFieldHandler }) => {
  const [finalidade, setFinalidade] = useState(data.finalidade || "");

  return (
    <div>
      <div className="form-control">
        <label htmlFor="finalidade">
          Qual a finalidade do uso da sala ou do laboratório da SoftexLabs?
        </label>
        <textarea
          id="finalidade"
          name="finalidade"
          placeholder="Digite aqui"
          rows="6"
          value={finalidade}
          onChange={(e) => setFinalidade(e.target.value)}
          style={{ width: "100%" }}  // Defina a largura diretamente no estilo
        />
      </div>
    </div>
  );
};

export default Finalidade;



