import React from "react";

function ResponsiveMessage({ windowWidth }) {
  return (
    <div style={{
      border: "2px solid #444",
      padding: "20px",
      width: "300px",
      margin: "20px auto",
      textAlign: "center",
      borderRadius: "10px"
    }}>
      <h2>Window Width: {windowWidth}px</h2>
      {windowWidth < 600 ? (
        <p style={{ color: "red" }}> Mobile View</p>
      ) : (
        <p style={{ color: "green" }}> Desktop View</p>
      )}
    </div>
  );
}

export default ResponsiveMessage;
