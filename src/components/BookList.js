// src/components/BookList.js
import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books, addToLibrary, searchTerm }) {
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.genre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="book-list">
      {filteredBooks.map((book) => (
        <div key={book.id} className="book-card">
          <h3>{book.title}</h3>
          <p>by {book.author}</p>
          <p>Genre: {book.genre}</p>
          <p>Rating: {book.rating}</p>
          <Link to={`/book/${book.id}`}>View Details</Link>
          <button onClick={() => addToLibrary(book)} className="button">Add to My Library</button>
        </div>
      ))}
    </div>
  );
}

export default BookList;
