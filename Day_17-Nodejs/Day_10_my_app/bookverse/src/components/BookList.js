import React, { useState } from "react";
import BookCard from "./BookCard";
import AuthorInfo from "./AuthorInfo";

const BookList = () => {
  const [view, setView] = useState("grid");
  const [search, setSearch] = useState("");
  const books = [
    { id: 1, title: "Atomic Habits", author: "James Clear", price: 499 },
    { id: 2, title: "Ikigai", author: "Héctor García", price: 399 },
    { id: 3, title: "Deep Work", author: "Cal Newport", price: 450 }
  ];

  const filtered = books.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Featured Books</h2>

      <div className="d-flex justify-content-center mb-3">
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="text-center mb-3">
        <button className="btn btn-outline-primary mx-2" onClick={() => setView("grid")}>
          Grid View
        </button>
        <button className="btn btn-outline-secondary mx-2" onClick={() => setView("list")}>
          List View
        </button>
      </div>

      <div className={view === "grid" ? "row" : "list-group"}>
        {filtered.map((book) => (
          <div key={book.id} className={view === "grid" ? "col-md-4" : "list-group-item"}>
            <BookCard title={book.title} author={book.author} price={book.price} />
          </div>
        ))}
      </div>

      <AuthorInfo />
    </div>
  );
};

export default BookList;
