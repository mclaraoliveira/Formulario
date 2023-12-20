import React, { useState } from "react";
import "./Thanks.css";

const Thanks = ({ data, updateFieldHandler }) => {
  const [querReceberNewsletter, setQuerReceberNewsletter] = useState(false);

  const handleNewsletterChange = (value) => {
    setQuerReceberNewsletter(value);
    updateFieldHandler("newsletter", value);

    // Limpar o campo de e-mail se o usuário optar por não receber o newsletter
    if (!value) {
      updateFieldHandler("emailNewsletter", ""); // Limpa o campo de e-mail
    }
  };

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
              checked={querReceberNewsletter}
              onChange={() => handleNewsletterChange(true)}
            />
            Sim
          </label>
          <label>
            <input
              type="radio"
              name="newsletter"
              value="nao"
              checked={!querReceberNewsletter}
              onChange={() => handleNewsletterChange(false)}
            />
            Não
          </label>
        </div>
      </div>

      {querReceberNewsletter && (
        <div className="form-control">
          <label>Digite seu e-mail:</label>
          <input
            type="text"
            value={data.emailNewsletter || ""}
            onChange={(e) => updateFieldHandler("emailNewsletter", e.target.value)}
          />
        </div>
      )}
    </div>
  );
};

export default Thanks;
