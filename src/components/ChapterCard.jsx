import QuestionCard from "./QuestionCard";
import "./ChapterCard.css";

function ChapterCard({ chapter }) {
  return (
    <section className="chapter-card">
      <div className="chapter-header">
        <span className="chapter-number">Ch {chapter.id}</span>
        <h3>{chapter.title}</h3>
        <span className="qa-count">
          {chapter.questions.length} Q&A
        </span>
      </div>

      <div className="questions-list">
        {chapter.questions.length === 0 ? (
          <p className="empty">No questions added yet.</p>
        ) : (
          chapter.questions.map((item) => (
            <QuestionCard
              key={item.id}
              question={item.question}
              answer={item.answer}
            />
          ))
        )}
      </div>
    </section>
  );
}

export default ChapterCard;