// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BookDetails from './pages/BookDetails';
import MyLibrary from './pages/MyLibrary';
import booksData from './data';

function App() {
  const [library, setLibrary] = useState([]);

  const addToLibrary = (book) => {
    if (!library.some((b) => b.id === book.id)) {
      setLibrary((prevLibrary) => [...prevLibrary, book]);
      alert(`${book.title} added to your library!`);
    } else {
      alert("This book is already in your library!");
    }
  };

  const removeFromLibrary = (id) => {
    const updatedLibrary = library.filter((book) => book.id !== id);
    setLibrary(updatedLibrary);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home books={booksData} addToLibrary={addToLibrary} />} />
        <Route path="/book/:id" element={<BookDetails books={booksData} addToLibrary={addToLibrary} />} />
        <Route path="/mylibrary" element={<MyLibrary library={library} removeFromLibrary={removeFromLibrary} />} />
      </Routes>
    </Router>
  );
}

export default App;
