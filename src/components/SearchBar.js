// src/components/SearchBar.js
import React, { useState } from 'react';


function SearchBar({ onSearch }) {
  const [term, setTerm] = useState('');

  const handleChange = (e) => {
    setTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    onSearch(term);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search-input" // Unique id for accessibility
        name="search"     // Name attribute for form autofill
        value={term}
        onChange={handleChange}
        placeholder="Search by title, author, or genre..."
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
