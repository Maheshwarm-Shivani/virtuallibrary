// src/context/LibraryContext.js
import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [libraryBooks, setLibraryBooks] = useState([]);

  const addToLibrary = (book) => {
    setLibraryBooks((prevBooks) => {
      if (prevBooks.find(b => b.id === book.id)) {
        return prevBooks; // Prevent adding duplicates
      }
      return [...prevBooks, book];
    });
  };

  const removeFromLibrary = (bookId) => {
    setLibraryBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <LibraryContext.Provider value={{ libraryBooks, addToLibrary, removeFromLibrary }}>
      {children}
    </LibraryContext.Provider>
  );
};
