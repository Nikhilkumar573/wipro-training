import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import BookPage from "./pages/BookPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from root to /home */}
        <Route path="/" element={<Navigate to="/home" />} />

        {/* Home page showing list of books */}
        <Route path="/home" element={<Home />} />

        {/* Book details page */}
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
