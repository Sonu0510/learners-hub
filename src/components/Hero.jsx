import "./Hero.css";

function Hero({ onOpenDoubtModal }) {
  return (
    <section className="hero">
      <div className="hero-badge">
        Free Learning Resources . Open for Students
      </div>

      <h1>
        Every question deserves <br />a <span>clear answer.</span>
      </h1>

      <p>
        Learn chapter by chapter with simple, well-structured answers written
        for students.
      </p>

      <div className="hero-actions">
        <a href="#chapters" className="primary-btn">
          Browse Chapters
        </a>
        <button className="secondary-btn" onClick={onOpenDoubtModal}>
          Submit a Doubt
        </button>
      </div>
    </section>
  );
}

export default Hero;
