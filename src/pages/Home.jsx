import { scienceData } from "../data/scienceData";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import ChapterCard from "../components/ChapterCard";

function Home() {
  const totalQuestions = scienceData.chapters.reduce(
    (total, chapter) => total + chapter.questions.length,
    0
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

        <section className="section-heading">
          <p>Class 9 · Science</p>
          <h2>Chapters</h2>
        </section>

        <div className="chapter-list">
          {scienceData.chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;