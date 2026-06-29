import { useState } from "react";

import { scienceData } from "../data/scienceData";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import SearchBar from "../components/SearchBar";
import ChapterList from "../components/ChapterList";
import DoubtModal from "../components/DoubtModal";
import Notification from "../components/Notification";
import TeacherInboxPreview from "../components/TeacherInboxPreview";

import "./Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDoubtModalOpen, setIsDoubtModalOpen] = useState(false);
  const [studentDoubts, setStudentDoubts] = useState([]);
  const [notification, setNotification] = useState(null);

  const chapters = scienceData.chapters || [];

  const totalQuestions = chapters.reduce(
    (total, chapter) => total + (chapter.questions || []).length,
    0,
  );

  const filteredChapters = chapters
    .map((chapter) => {
      const term = searchTerm.toLowerCase().trim();
      const questions = chapter.questions || [];

      if (!term) return chapter;

      const chapterMatches =
        String(chapter.name).toLowerCase().includes(term) ||
        String(chapter.chapter_number).includes(term);

      const filteredQuestions = questions.filter((question) => {
        const questionText = String(question.question).toLowerCase();

        const answerText =
          question.answers
            ?.map((answer) => String(answer.answer).toLowerCase())
            .join(" ") || "";

        return questionText.includes(term) || answerText.includes(term);
      });

      if (chapterMatches || filteredQuestions.length > 0) {
        return {
          ...chapter,
          questions: chapterMatches ? questions : filteredQuestions,
        };
      }

      return null;
    })
    .filter(Boolean);

  function handleDoubtSubmit(newDoubt) {
    setStudentDoubts((previousDoubts) => [
      ...previousDoubts,
      {
        id: Date.now(),
        ...newDoubt,
      },
    ]);

    setNotification({
      type: "success",
      title: "Doubt Submitted",
      message: "Your teacher will review your question soon.",
    });

    setTimeout(() => {
      setNotification(null);
    }, 3500);
  }

  return (
    <div className="page">
      <Header />

      <Hero onOpenDoubtModal={() => setIsDoubtModalOpen(true)} />

      <main className="container" id="chapters">
        <Stats chapters={chapters.length} questions={totalQuestions} />

        <SearchBar value={searchTerm} onChange={setSearchTerm} />

        <section className="course-banner">
          <div>
            <span className="course-label">Currently Available</span>
            <h2>Class 9 Science</h2>
            <p>Browse chapter-wise questions and teacher-written answers.</p>
          </div>
        </section>
        <TeacherInboxPreview doubts={studentDoubts} />
        <ChapterList chapters={filteredChapters} />

        {filteredChapters.length === 0 && (
          <p className="no-results">
            No matching chapter, question or answer found.
          </p>
        )}
      </main>

      {notification && (
        <Notification
          type={notification.type}
          title={notification.title}
          message={notification.message}
        />
      )}

      {isDoubtModalOpen && (
        <DoubtModal
          chapters={chapters}
          onClose={() => setIsDoubtModalOpen(false)}
          onSubmit={handleDoubtSubmit}
        />
      )}
    </div>
  );
}

export default Home;
