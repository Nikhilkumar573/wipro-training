import React from "react";
import AddBookForm from "./components/AddBookForm";
import BookList from "./components/BookList";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/add">Add Book</Link>
      </nav>

      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/add" element={<AddBookForm />} />
      </Routes>
    </BrowserRouter>
  );
}
