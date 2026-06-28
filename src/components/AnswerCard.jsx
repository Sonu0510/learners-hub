import "./AnswerCard.css";

function AnswerCard({ answer }) {
  return (
    <div className="answer-card">
      <div className="answer-header">
        <span className="answer-check">✓</span>
        <span>Teacher Approved Answer</span>
      </div>

      <p className="answer-text">{answer}</p>
    </div>
  );
}

export default AnswerCard;
