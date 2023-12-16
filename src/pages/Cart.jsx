import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeProductFromCart } from '../reducers/cart/cartSlice';

// Componente de la página del carrito de compras
export const Cart = () => {
  // Función de despacho y obtención del estado del carrito desde Redux
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart);

  // Manejar la eliminación de un producto del carrito
  const handleRemoveProduct = (productId) => dispatch(removeProductFromCart(productId));

  // Renderizar la interfaz de usuario
  return (
    <>
      <h2>Cart</h2>
      {productsList.length === 0 ? (
        // Mostrar mensaje si no hay productos en el carrito
        <p>No products in the cart</p>
      ) : (
        // Mostrar la tabla de productos en el carrito
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {productsList.map(product => (
              // Mostrar cada producto en una fila de la tabla
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td scope="row">{product.name}</td>
                <td scope="row">{product.price}</td>
                <td scope="row">{product.category}</td>
                <td scope="row">
                  {/* Botón para eliminar el producto del carrito */}
                  <button className="btn btn-danger" onClick={() => handleRemoveProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
