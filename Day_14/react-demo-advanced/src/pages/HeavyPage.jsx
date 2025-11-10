import React from "react";

function HeavyPage() {
  return (
    <div>
      <h2>Heavy Page</h2>
      <p>This component is lazily loaded only when needed!</p>
      <img
        src="https://via.placeholder.com/600x300?text=Heavy+Content"
        alt="placeholder"
      />
    </div>
  );
}

export default HeavyPage;
