import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Packages from "../pages/Packages";
import Booking from "../pages/Booking";
import Contact from "../pages/Contact";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="container my-4">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
