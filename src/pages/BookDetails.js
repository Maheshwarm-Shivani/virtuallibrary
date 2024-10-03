import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function BookDetails({ books, addToLibrary }) {
  const { id } = useParams(); // Get the book ID from the URL
  const navigate = useNavigate(); // Allows navigation between routes

  // Find the book in the list of books based on the ID from the URL
  const book = books.find((b) => b.id === parseInt(id, 10));

  // Function to handle adding the book to the library
  const handleAddToLibrary = () => {
    if (book) {
      addToLibrary(book);
      alert(`${book.title} has been added to your library!`);
    }
  };

  return (
    <div className="book-details">
      {book ? ( // If the book is found, display its details
        <>
          <h2>{book.title}</h2>
          <h3>Author: {book.author}</h3>
          <p>Genre: {book.genre}</p>
          <p>Rating: {book.rating}</p>
          <p>Description: {book.description}</p>
          <p>Publication Year: {book.publication_year}</p>

          {/* Button to add the book to the user's library */}
          <button onClick={handleAddToLibrary} className="button">Add to My Library</button>

          {/* Button to go back to the homepage */}
          <button onClick={() => navigate('/')} className="button">Go Back</button>

          {/* Optional link to navigate to the user's library */}
          <button onClick={() => navigate('/mylibrary')} className="button">Go to My Library</button>
        </>
      ) : ( // If the book is not found, display a message
        <p>Book not found!</p>
      )}
    </div>
  );
}

export default BookDetails;
