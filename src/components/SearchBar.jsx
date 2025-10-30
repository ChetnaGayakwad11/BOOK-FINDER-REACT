import React from "react";

export default function SearchBar({ query, setQuery, onSearch }) {
  return (
    <div className="search-bar">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onSearch()}
        placeholder="Search by book title..."
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}
