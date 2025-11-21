import React from "react";
import ProductCard from "./ProductCard";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> Shop Now</h1>

      <ProductCard 
        title="Wireless Headphones"
        price={1500}
        discount={300}
      />

      <ProductCard 
        title="Smartphone"
        price={20000}
        discount={1500}
      />

      <ProductCard 
        title="Laptop Bag"
        price={1200}
        discount={200}
      />
    </div>
  );
}

export default App;
