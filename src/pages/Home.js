import React, { useState } from 'react';
import BookList from '../components/BookList'; // Component to render the list of books
import SearchBar from '../components/SearchBar'; // Component for the search bar

function Home({ books, addToLibrary }) {
  const [searchTerm, setSearchTerm] = useState(''); // State to track the search term

  // Handler for updating the search term
  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="home-page">
      <h1>Virtual Book Library</h1>

      {/* Search bar to filter books by title, author, or genre */}
      <SearchBar onSearch={handleSearch} />

      {/* Book list to display filtered books */}
      <BookList books={books} addToLibrary={addToLibrary} searchTerm={searchTerm} />
    </div>
  );
}

export default Home;
