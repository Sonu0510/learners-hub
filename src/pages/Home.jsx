import { scienceData } from "../data/scienceData";

function Home() {
  return (
    <main>
      <h1>Learners Hub</h1>
      <p>Clear answers for students, chapter by chapter.</p>

      <h2>
        {scienceData.className} · {scienceData.subjectName}
      </h2>

      {scienceData.chapters.map((chapter) => (
        <section key={chapter.id}>
          <h3>
            Chapter {chapter.id}: {chapter.title}
          </h3>

          {chapter.questions.length === 0 ? (
            <p>No questions added yet.</p>
          ) : (
            chapter.questions.map((item) => (
              <article key={item.id}>
                <h4>{item.question}</h4>
                <p>{item.answer}</p>
              </article>
            ))
          )}
        </section>
      ))}
    </main>
  );
}

export default Home;