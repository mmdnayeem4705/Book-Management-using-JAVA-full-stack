import React from 'react';
import AddBookForm from './components/AddBookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div>
      <h1>📚 Book Manager</h1>
      <AddBookForm />
      <BookList />
    </div>
  );
}

export default App;
