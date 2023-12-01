import React from "react";
import { BsFillEmojiHeartEyesFill, BsFillEmojiSmileFill, BsFillEmojiNeutralFill, BsFillEmojiFrownFill } from "react-icons/bs";
import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <div className="review-form">
            <div className="form-control score-container">
                <label className="radio-container" htmlFor="unsatisfied">
                <input
                    type="radio"
                    id="unsatisfied"
                    value="unsatisfied"
                    name="review"
                    required
                    checked={data.review === "unsatisfied"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)}
                    />

                    <BsFillEmojiFrownFill aria-label="Ícone de Insatisfeito" />
                    <p>Insatisfeito</p>
                </label>
                <label className="radio-container" htmlFor="neutral">
                    <input type="radio" id="neutral" value="neutral" name="review" required
                    checked={data.review === "neutral"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)} />
                    <BsFillEmojiNeutralFill aria-label="Ícone de Poderia ser melhor" />
                    <p>Poderia ser melhor</p>
                </label>
                <label className="radio-container" htmlFor="satisfied">
                    <input type="radio" id="satisfied" value="satisfied" name="review" required
                    checked={data.review === "satisfied"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)} />
                    <BsFillEmojiSmileFill aria-label="Ícone de Satisfeito" />
                    <p>Satisfeito</p>
                </label>
                <label className="radio-container" htmlFor="very_satisfied">
                    <input type="radio" id="very_satisfied" value="very_satisfied" name="review" required 
                    checked={data.review === "very_satisfied"}
                    onChange={(e) => updateFieldHandler("review", e.target.value)}/>
                    <BsFillEmojiHeartEyesFill aria-label="Ícone de Muito satisfeito" />
                    <p>Muito satisfeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea name="comment" id="comment" placeholder="Conte como foi a sua experiência com o produto" required
                value={data.comment || ""}
                onChange={(e) => updateFieldHandler("comment", e.target.value)}></textarea>
            </div>
        </div>
    );
};

export default ReviewForm;
