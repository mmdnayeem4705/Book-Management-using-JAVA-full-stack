import React, { useState } from 'react';

const AddBookForm = () => {
  const [form, setForm] = useState({ title: '', author: '', description: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await fetch("http://localhost:8080/api/books", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    setForm({ title: '', author: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={form.title} onChange={handleChange} placeholder="Title" />
      <input name="author" value={form.author} onChange={handleChange} placeholder="Author" />
      <input name="description" value={form.description} onChange={handleChange} placeholder="Description" />
      <button type="submit">Add Book</button>
    </form>
  );
};

export default AddBookForm;
