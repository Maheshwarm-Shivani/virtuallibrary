// src/components/BookCard.js
import React from 'react';
import { Link } from 'react-router-dom';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Rating: {book.rating}</p>
      <Link to={`/book/${book.id}`}>View Details</Link>
    </div>
  );
}

export default BookCard;
