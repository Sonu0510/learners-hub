import { scienceData } from "../data/scienceData";
import { useLearnersHub } from "../contexts/LearnersHubContext";
import TeacherInboxPreview from "../components/TeacherInboxPreview";

function TeacherDashboard() {
  const { studentDoubts } = useLearnersHub();

  return (
    <main className="container">
      <h1>Teacher Dashboard</h1>
      <p>Review student doubts and prepare answers.</p>

      <TeacherInboxPreview
        doubts={studentDoubts}
        chapters={scienceData.chapters}
      />
    </main>
  );
}

export default TeacherDashboard;
