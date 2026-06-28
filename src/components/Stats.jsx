function Stats({ chapters, questions }) {
  return (
    <section className="stats">
      <div>
        <strong>1</strong>
        <span>Class</span>
      </div>

      <div>
        <strong>1</strong>
        <span>Subject</span>
      </div>

      <div>
        <strong>{chapters}</strong>
        <span>Chapters</span>
      </div>

      <div>
        <strong>{questions}</strong>
        <span>Questions</span>
      </div>
    </section>
  );
}

export default Stats;