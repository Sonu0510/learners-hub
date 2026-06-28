import "./SearchBar.css";

function SearchBar({ value, onChange }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search chapter, question, or answer..."
      />
      <span>🔍</span>
    </div>
  );
}

export default SearchBar;
