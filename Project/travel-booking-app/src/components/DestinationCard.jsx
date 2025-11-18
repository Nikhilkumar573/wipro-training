import React from "react";
import PropTypes from "prop-types";

const DestinationCard = ({ title, description, image, wishlisted, onToggle }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        {image && (
          <img src={image} className="card-img-top" alt={title} style={{ height: 200, objectFit: "cover" }} />
        )}
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{title}</h5>
          <p className="card-text flex-grow-1">{description}</p>
          <button
            className={`btn ${wishlisted ? "btn-danger" : "btn-outline-primary"}`}
            onClick={onToggle}
          >
            {wishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
          </button>
        </div>
      </div>
    </div>
  );
};

DestinationCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  wishlisted: PropTypes.bool,
  onToggle: PropTypes.func
};

export default DestinationCard;
