import React from "react";
import "./Steps.css";
import { HiIdentification } from "react-icons/hi2";
import { IoBusiness } from "react-icons/io5";
import { FaBusinessTime } from "react-icons/fa";
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { FiSend } from "react-icons/fi";

const Steps = ({ currentStep }) => {
    return (
        <div className="steps">
            <div className="step active">
                <HiIdentification />
                <p>Documento</p>
            </div>

            <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
                <IoBusiness />
                <p>Confirmação</p>
            </div>

            <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
                <FaBusinessTime />
                <p>Informações</p>
            </div>
            
            <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
                <FiSend />
                <p>Envio</p>
            </div>
        </div>
    );
};

export default Steps;
