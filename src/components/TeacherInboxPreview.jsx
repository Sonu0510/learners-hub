import "./TeacherInboxPreview.css";

function TeacherInboxPreview({ doubts }) {
  if (doubts.length === 0) return null;

  return (
    <section className="teacher-preview">
      <div>
        <p className="teacher-preview-label">Teacher Inbox Preview</p>
        <h3>
          {doubts.length} pending doubt{doubts.length !== 1 ? "s" : ""}
        </h3>
      </div>
    </section>
  );
}

export default TeacherInboxPreview;
