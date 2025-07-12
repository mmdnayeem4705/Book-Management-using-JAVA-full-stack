import React, { useEffect, useState } from 'react';

const BookList = () => {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    const res = await fetch("http://localhost:8080/api/books");
    const data = await res.json();
    setBooks(data);
  };

  const deleteBook = async (id) => {
    await fetch(`http://localhost:8080/api/books/${id}`, { method: 'DELETE' });
    fetchBooks();
  };

  useEffect(() => { fetchBooks(); }, []);

  return (
    <div>
      {books.map(book => (
        <div key={book.id}>
          <h3>{book.title}</h3>
          <p>By {book.author}</p>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BookList;
