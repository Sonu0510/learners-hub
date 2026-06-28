import "./AnswerCard.css";

function AnswerCard({ answer }) {
  return (
    <div className="answer-card">
      <span className="answer-label">Answer</span>
      <p className="answer-text">{answer}</p>
    </div>
  );
}

export default AnswerCard;