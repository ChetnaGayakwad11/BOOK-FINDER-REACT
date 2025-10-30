import React from "react";

export default function BookCard({ book }) {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : null;

  const author = book.author_name?.join(", ") || "Unknown Author";
  const year = book.first_publish_year || "N/A";

  return (
    <div className="book-card">
      <div className="cover">
        {coverUrl ? (
          <img src={coverUrl} alt={book.title} />
        ) : (
          <span>No cover</span>
        )}
      </div>
      <h3>{book.title}</h3>
      <p>{author}</p>
      <p className="year">First published: {year}</p>
    </div>
  );
}
