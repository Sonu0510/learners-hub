import { scienceData } from "../data/scienceData";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ChapterList from "../components/ChapterList";
import "./Home.css";

function Home() {
  const totalQuestions = scienceData.chapters.reduce(
    (total, chapter) => total + chapter.questions.length,
    0,
  );

  return (
    <div className="page">
      <Header />
      <Hero />

      <main className="container" id="chapters">
        <Stats
          chapters={scienceData.chapters.length}
          questions={totalQuestions}
        />

        <section className="course-header">
          <div>
            <p className="course-label">Currently Available</p>
            <h2>Class 9 Science</h2>
            <p className="course-description">
              Browse chapter-wise questions and teacher-written answers.
            </p>
          </div>

          <button className="doubt-btn">Submit a Doubt</button>
        </section>

        <ChapterList chapters={scienceData.chapters} />
      </main>
    </div>
  );
}

export default Home;
