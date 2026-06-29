import { useState } from "react";
import "./DoubtModal.css";

function DoubtModal({ chapters, onClose, onSubmit }) {
  const [studentName, setStudentName] = useState("");
  const [chapterId, setChapterId] = useState("");
  const [question, setQuestion] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!chapterId || !question.trim()) {
      alert("Please select a chapter and write your doubt.");
      return;
    }

    onSubmit({
      student_name: studentName.trim() || null,
      class_id: 1,
      subject_id: 2,
      chapter_id: Number(chapterId),
      question: question.trim(),
      status: "pending",
    });

    setStudentName("");
    setChapterId("");
    setQuestion("");
    onClose();
  }

  return (
    <div className="modal-backdrop">
      <form className="doubt-modal" onSubmit={handleSubmit}>
        <div className="modal-header">
          <div>
            <h2>Submit Your Doubt</h2>
            <p>Your teacher will review it and add an answer if needed.</p>
          </div>

          <button type="button" className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <label>
          Your Name <span>(optional)</span>
          <input
            type="text"
            value={studentName}
            onChange={(event) => setStudentName(event.target.value)}
            placeholder="e.g. Sita Sharma"
          />
        </label>

        <label>
          Chapter
          <select
            value={chapterId}
            onChange={(event) => setChapterId(event.target.value)}
          >
            <option value="">Select chapter</option>
            {chapters.map((chapter) => (
              <option key={chapter.id} value={chapter.id}>
                Ch {chapter.chapter_number} · {chapter.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          Your Question / Doubt
          <textarea
            value={question}
            onChange={(event) => setQuestion(event.target.value)}
            placeholder="Write your question clearly..."
            rows="5"
          />
        </label>

        <div className="modal-actions">
          <button type="button" className="cancel-btn" onClick={onClose}>
            Cancel
          </button>

          <button type="submit" className="send-btn">
            Send Doubt ✓
          </button>
        </div>
      </form>
    </div>
  );
}

export default DoubtModal;
