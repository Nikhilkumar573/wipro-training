import React from "react";
import PropTypes from "prop-types";

const PackageCard = ({ pkg, onSelect }) => {
  
  // Debug log to verify image data (you can remove later)
  console.log("📌 PackageCard Data:", pkg);

  return (
    <div className="col-md-6 col-lg-4 mb-4">
      <div className="card package-card shadow-sm">

        {/* SAFE IMAGE WITH FALLBACK */}
        <img
          src={pkg.image || "https://via.placeholder.com/400x250?text=No+Image"}
          alt={pkg.name}
          className="card-img-top"
          style={{
            height: "220px",
            width: "100%",
            objectFit: "cover",
            borderRadius: "10px",
          }}
        />

        <div className="card-body">
          <h5 className="card-title fw-bold">{pkg.name}</h5>
          <p className="card-text">{pkg.description}</p>

          <p className="fw-semibold text-dark">💰 Price: ₹{pkg.price}</p>
          <p className="text-warning">⭐ {pkg.rating}</p>

          <button
            className="btn btn-primary w-100 mt-2"
            style={{ borderRadius: "25px" }}
            onClick={() => onSelect(pkg)}
          >
            🚀 Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

PackageCard.propTypes = {
  pkg: PropTypes.object.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default PackageCard;
