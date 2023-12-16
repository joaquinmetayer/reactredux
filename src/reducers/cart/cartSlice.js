import { createSlice } from '@reduxjs/toolkit';

// Estado inicial del carrito de compras
const initialState = {
  totalCount: 0,        // Número total de productos en el carrito
  productsList: [],     // Lista de productos en el carrito
}

// Slice de Redux para el carrito de compras
export const cartSlice = createSlice({
  name: 'cart',                 // Nombre del slice
  initialState: initialState,   // Estado inicial del slice
  reducers: {
    // Reducer para añadir un producto al carrito
    addProductToCart: (state, action) => {
      state.productsList = [...state.productsList, action.payload];
      state.totalCount += 1; // Incrementar el contador total de productos
    },
    // Reducer para eliminar un producto del carrito
    removeProductFromCart: (state, action) => {
      const productId = action.payload;
      state.totalCount -= 1; // Decrementar el contador total de productos
      // Filtrar la lista de productos para quitar el producto con el ID proporcionado
      state.productsList = state.productsList.filter(product => product.id !== productId);
    },
  }
})

// Action creators generados automáticamente para cada función reducer
export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

// Reducer exportado para ser utilizado en el store de Redux
export default cartSlice.reducer;