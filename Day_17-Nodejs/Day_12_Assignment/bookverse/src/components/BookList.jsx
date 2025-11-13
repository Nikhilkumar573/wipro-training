import React from "react";
import { Link } from "react-router-dom";

const BookList = ({ books }) => (
  <div>
    {books.map((book) => (
      <div key={book.id}>
        <h3>{book.title}</h3>
        <p>By {book.author}</p>
        <Link to={`/book/${book.id}`}>View Details</Link>
        <hr />
      </div>
    ))}
  </div>
);

export default BookList;
