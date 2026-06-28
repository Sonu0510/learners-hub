import { useState } from "react";
import QuestionCard from "./QuestionCard";
import "./ChapterCard.css";

function ChapterCard({ chapter }) {
  const [isOpen, setIsOpen] = useState(false);
  const questions = chapter.questions || [];

  return (
    <section className={`chapter-card ${isOpen ? "open" : ""}`}>
      <button
        className="chapter-header"
        onClick={() => setIsOpen(!isOpen)}
        type="button"
      >
        <span className="chapter-number">Ch {chapter.chapter_number}</span>

        <h3>{chapter.name}</h3>

        <span className="qa-count">{questions.length} Q&A</span>

        <span className="chapter-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="questions-list">
          {questions.length === 0 ? (
            <p className="empty">No questions added yet.</p>
          ) : (
            questions.map((item) => (
              <QuestionCard key={item.id} question={item} />
            ))
          )}
        </div>
      )}
    </section>
  );
}

export default ChapterCard;