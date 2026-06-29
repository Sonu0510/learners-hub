import { useState } from "react";

import { scienceData } from "../data/scienceData";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import ChapterList from "../components/ChapterList";
import DoubtModal from "../components/DoubtModal";
import "./Home.css";

function Home() {
  const totalQuestions = scienceData.chapters.reduce(
    (total, chapter) => total + chapter.questions.length,
    0,
  );

  const [searchTerm, setSearchTerm] = useState("");

  const filteredChapters = scienceData.chapters
    .map((chapter) => {
      const term = searchTerm.toLowerCase().trim();

      if (!term) return chapter;

      const chapterMatches =
        chapter.name.toLowerCase().includes(term) ||
        String(chapter.chapter_number).includes(term);

      const filteredQuestions = chapter.questions.filter((question) => {
        const questionText = question.question.toLowerCase();

        const answerText =
          question.answers
            ?.map((answer) => answer.answer.toLowerCase())
            .join(" ") || "";

        return questionText.includes(term) || answerText.includes(term);
      });

      if (chapterMatches || filteredQuestions.length > 0) {
        return {
          ...chapter,
          questions: chapterMatches ? chapter.questions : filteredQuestions,
        };
      }

      return null;
    })
    .filter(Boolean);

  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [studentDoubts, setStudentDoubts] = useState([]);

  function handleDoubtSubmit(newDoubt) {
    setStudentDoubts((previousDoubts) => [
      ...previousDoubts,
      {
        id: Date.now(),
        ...newDoubt,
      },
    ]);

    alert("Your doubt has been submitted for teacher review.");
  }

  return (
    <div className="page">
      <Header />

      <Hero />

      <main className="container" id="chapters">
        <Stats
          chapters={scienceData.chapters.length}
          questions={totalQuestions}
        />

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <section className="course-banner">
          <div>
            <span className="course-label">Currently Available</span>

            <h2>Class 9 Science</h2>

            <p>Browse chapter-wise questions and teacher-written answers.</p>
          </div>

          <button
            className="primary-btn"
            onClick={() => setIsDoubtModalOpen(true)}
          >
            Submit a Doubt
          </button>
        </section>

        <ChapterList chapters={filteredChapters} />

        {filteredChapters.length === 0 && (
          <p className="no-results">
            No matching chapter, question or answer found.
          </p>
        )}
      </main>

      {isDoubtModalOpen && (
        <DoubtModal
          chapters={scienceData.chapters}
          onClose={() => setIsDoubtModalOpen(false)}
          onSubmit={handleDoubtSubmit}
        />
      )}
    </div>
  );
}

export default Home;
