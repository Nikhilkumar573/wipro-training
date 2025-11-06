import React from "react";
import PropTypes from "prop-types";

const BookCard = ({ title, author, price }) => {
  return (
    <div className="card p-3 my-2">
      <h4>{title}</h4>
      <p>by {author}</p>
      <p>₹{price}</p>
    </div>
  );
};

// ✅ PropTypes validation
BookCard.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default BookCard;

