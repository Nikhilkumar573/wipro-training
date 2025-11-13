import React, { useEffect, useState } from "react";
import axios from "axios";
import BookList from "../components/BookList";
import withLoading from "../components/withLoading";

const BookListWithLoading = withLoading(BookList);

function Home() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/books").then((res) => {
      setBooks(res.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1> BookVerse</h1>
      <BookListWithLoading loading={loading} books={books} />
    </div>
  );
}

export default Home;
