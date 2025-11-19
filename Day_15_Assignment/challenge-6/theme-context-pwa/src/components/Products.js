import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, updateProduct } from "../store/productsSlice";

function Products() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.products);
  const [text, setText] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") return <p>⏳ Loading...</p>;
  if (status === "error") return <p>❌ Failed to fetch products</p>;

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>🛍 Product Management (Redux Toolkit)</h2>

      {items.map((product) => (
        <div key={product.id} style={{ margin: "10px 0" }}>
          <strong>{product.title}</strong>
          <input
            style={{ marginLeft: "10px" }}
            placeholder="Update name..."
            onChange={(e) => setText(e.target.value)}
          />
          <button
            onClick={() => dispatch(updateProduct({ id: product.id, title: text }))}
            style={{ marginLeft: "10px" }}
          >
            Update
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
