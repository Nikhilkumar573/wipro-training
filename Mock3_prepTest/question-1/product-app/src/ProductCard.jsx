import React from "react";

function ProductCard({ title, price, discount }) {
  
  const finalPrice = price - discount;

  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "250px",
      marginBottom: "10px",
      borderRadius: "6px"
    }}>
      <h2>{title}</h2>
      <p>Original Price: ₹{price}</p>
      <p>Discount: ₹{discount}</p>
      <h3>Final Price: ₹{finalPrice}</h3>
      <button style={{ padding: "6px 12px", cursor: "pointer" }}>
        Buy Now
      </button>
    </div>
  );
}

export default ProductCard;
