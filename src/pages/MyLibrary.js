// src/pages/MyLibraryPage.js
import React from 'react';

function MyLibrary({ library, removeFromLibrary }) {
  return (
    <div className="my-library">
      <h2>My Library</h2>
      {library.length === 0 ? (
        <p>No books in your library yet.</p>
      ) : (
        <ul>
          {library.map((book) => (
            <li key={book.id} className="library-book">
              <p>{book.title} by {book.author}</p>
              <button onClick={() => removeFromLibrary(book.id)} className="button">Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MyLibrary;

