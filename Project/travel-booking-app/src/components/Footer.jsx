import React from "react";

const Footer = () => {
  return (
    <footer className="bg-light border-top py-3 mt-auto">
      <div className="container text-center small text-muted">
        © {new Date().getFullYear()} SkillTrack Travel Booking Platform
      </div>
    </footer>
  );
};

export default Footer;
