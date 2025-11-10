import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import FadeTransition from "../components/FadeTransition";

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/books/${id}`).then((res) => setBook(res.data));
  }, [id]);

  return (
    <FadeTransition>
      <div>
        {book ? (
          <>
            <h2>{book.title}</h2>
            <p><strong>Author:</strong> {book.author}</p>
            <p>{book.description}</p>
            <Link to="/home">⬅ Back to Home</Link>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </FadeTransition>
  );
}

export default BookPage;
