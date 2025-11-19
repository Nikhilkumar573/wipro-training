import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// BONUS: async API using thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return await res.json();
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // idle | loading | success | error
  },
  reducers: {
    updateProduct(state, action) {
      const { id, title } = action.payload;
      const product = state.items.find((p) => p.id === id);
      if (product) {
        product.title = title;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "error";
      });
  },
});

export const { updateProduct } = productsSlice.actions;
export default productsSlice.reducer;
