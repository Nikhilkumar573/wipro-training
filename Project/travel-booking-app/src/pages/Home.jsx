import React, { useState } from "react";
import DestinationCard from "../components/DestinationCard";

const Home = () => {
  return (
    <section
      className="hero-section d-flex align-items-center"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1507525428034-b723cf961d3e")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh",
        color: "white",
        borderRadius: "12px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.3)",
      }}
    >
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Discover Your Next Adventure 🌍</h1>
        <p className="fs-5">Luxury. Comfort. Experience.</p>
        <a href="/packages" className="btn btn-lg btn-warning px-4 shadow">
          ✈ Explore Packages
        </a>
      </div>
    </section>
  );
};

export default Home;


