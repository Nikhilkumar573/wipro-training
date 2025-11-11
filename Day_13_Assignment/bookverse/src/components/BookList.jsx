import React, { useEffect, useState } from "react";
import bookStore from "../flux/store/bookStore";

export default function BookList() {
  const [books, setBooks] = useState(bookStore.getBooks());

  useEffect(() => {
    const update = () => setBooks([...bookStore.getBooks()]);
    bookStore.addChangeListener(update);
    return () => bookStore.removeChangeListener(update);
  }, []);

  return (
    <div>
      <h2>Book Collection</h2>
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <ul>
          {books.map((b, i) => (
            <li key={i}>
              <strong>{b.title}</strong> by {b.author} — ${b.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
