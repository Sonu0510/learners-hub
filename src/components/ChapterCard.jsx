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
        <div className="chapter-left">
          <span className="chapter-number">Ch {chapter.chapter_number}</span>

          <div>
            <h3>{chapter.name}</h3>
            <p>
              {questions.length} approved question
              {questions.length !== 1 ? "s" : ""}
            </p>
          </div>
        </div>

        <span className="chapter-arrow">{isOpen ? "▲" : "▼"}</span>
      </button>

      {isOpen && (
        <div className="questions-list">
          {questions.length === 0 ? (
            <p className="empty">No approved questions yet for this chapter.</p>
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
