import { useState } from "react";
import "./QuestionCard.css";
import AnswerCard from "./AnswerCard";

function QuestionCard({ question }) {
  const [isOpen, setIsOpen] = useState(false);

  const answer = question.answers?.[0];

  return (
    <article className={`question-card ${isOpen ? "open" : ""}`}>
      <button
        className="question-header"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="question-badge">Q</span>

        <p className="question-text">{question.question}</p>

        <span className="question-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="question-body">
          {answer ? (
            <AnswerCard answer={answer.answer} />
          ) : (
            <p className="answer-empty">Answer coming soon.</p>
          )}
        </div>
      )}
    </article>
  );
}

export default QuestionCard;
