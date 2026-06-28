import QuestionCard from "./QuestionCard";
import "./ChapterCard.css";

function ChapterCard({ chapter }) {
  const questions = chapter.questions || [];

  return (
    <section className="chapter-card">
      <div className="chapter-header">
        <span className="chapter-number">Ch {chapter.chapter_number}</span>
        <h3>{chapter.name}</h3>
        <span className="qa-count">{questions.length} Q&A</span>
      </div>

      <div className="questions-list">
        {questions.length === 0 ? (
          <p className="empty">No questions added yet.</p>
        ) : (
          questions.map((item) => (
            <QuestionCard key={item.id} question={item} />
          ))
        )}
      </div>
    </section>
  );
}

export default ChapterCard;