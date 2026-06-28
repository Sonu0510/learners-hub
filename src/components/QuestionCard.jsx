function QuestionCard({ question, answer }) {
  return (
    <article className="question-card">
      <p className="question-text">{question}</p>
      <p className="answer-text">{answer}</p>
    </article>
  );
}

export default QuestionCard;