import ChapterCard from "./ChapterCard";
import "./ChapterList.css";

function ChapterList({ chapters }) {
  return (
    <div className="chapter-list">
      {chapters.map((chapter) => (
        <ChapterCard key={chapter.id} chapter={chapter} />
      ))}
    </div>
  );
}

export default ChapterList;