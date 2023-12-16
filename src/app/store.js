import { configureStore } from '@reduxjs/toolkit';

// Importar los reducers personalizados
import userReducer from '../reducers/user/userSlice';
import cartReducer from '../reducers/cart/cartSlice';

// Configurar el store de Redux con los reducers combinados
// Cada reducer maneja una parte específica del estado global
const store = configureStore({
  reducer: {
    user: userReducer, // Reducer para gestionar el estado relacionado con el usuario
    cart: cartReducer, // Reducer para gestionar el estado relacionado con el carrito de compras
  },
});

// El objeto 'store' ahora contiene el estado global de la aplicación
export default store;
