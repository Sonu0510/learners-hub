import "./TeacherInboxPreview.css";

function TeacherInboxPreview({ doubts, chapters }) {
  if (doubts.length === 0) return null;

  function getChapterName(chapterId) {
    const chapter = chapters.find((item) => item.id === chapterId);
    return chapter
      ? `Ch ${chapter.chapter_number} · ${chapter.name}`
      : "Unknown chapter";
  }

  return (
    <section className="teacher-preview">
      <div className="teacher-preview-header">
        <div>
          <p className="teacher-preview-label">Teacher Inbox Preview</p>
          <h3>
            {doubts.length} pending doubt{doubts.length !== 1 ? "s" : ""}
          </h3>
        </div>
      </div>

      <div className="doubt-list">
        {doubts.map((doubt) => (
          <article className="doubt-card" key={doubt.id}>
            <div className="doubt-card-top">
              <span className="status-badge">Pending</span>
              <span className="chapter-name">
                {getChapterName(doubt.chapter_id)}
              </span>
            </div>

            <p className="student-name">
              Student: {doubt.student_name || "Anonymous"}
            </p>

            <p className="doubt-question">{doubt.question}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default TeacherInboxPreview;
