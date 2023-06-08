import React, { useState } from 'react';
import './manageBooks.css'
import axios from "axios"

const UpdateBook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Create the book object
    const book = {
      title: bookTitle,
      author,
      isbn,
      description
    };


    axios({
        url:"http://localhost:3001/updateBook",
        method:"POST",
        data:book
      }).then(res=>{
        console.log(res.data)
      }).catch(err=>console.log(err))
    

    // Make the API call to add the book
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setBookTitle('');
    setAuthor('');
    setDescription('');
  };


  const handleUpdate = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Create the book object
    const book = {
      title: bookTitle,
      author,
      isbn,
      description
    };

    // Make the API call to update the book
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setBookTitle('');
    setAuthor('');
    setIsbn('');
    setDescription('');
  };

  const handleDelete = (e) => {
    e.preventDefault();

    // Perform any additional validation or data processing here

    // Make the API call to delete the book
    // You can use libraries like Axios or fetch for making the API request

    // Reset the form after submission
    setBookTitle('');
    setAuthor('');
    setIsbn('');
    setDescription('');
  };

  return (
    <div className='book-form'>
    <form onSubmit={handleUpdate}>
        <h2>Update Book</h2>
        <label htmlFor="isbn">ISBN:</label>
        <input
          type="text"
          id="isbn"
          value={isbn}
          onChange={(e) => setIsbn(e.target.value)}
          required
        />
        

        <label htmlFor="bookTitle">Title:</label>
        <input
          type="text"
          id="bookTitle"
          value={bookTitle}
          onChange={(e) => setBookTitle(e.target.value)}
          required
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />

        
        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <button type="submit">Update Book</button>
      </form>
          </div>
  );
};

export default UpdateBook;
