import "./QuestionCard.css";
import AnswerCard from "./AnswerCard";

function QuestionCard({ question }) {
  const answer = question.answers?.[0];

  return (
    <article className="question-card">
      <p className="question-text">{question.question}</p>

      {answer ? (
        <AnswerCard answer={answer.answer} />
      ) : (
        <p className="answer-empty">Answer coming soon.</p>
      )}
    </article>
  );
}

export default QuestionCard;                                                      