import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addProductToCart, removeProductFromCart } from '../reducers/cart/cartSlice';

// Componente ProductsList: Representa una lista de productos y gestiona las interacciones del usuario con el carrito de compras.
export const ProductsList = ({ products }) => {
  // Obtener la función de despacho (dispatch) y el estado del carrito desde el almacenamiento global.
  const dispatch = useDispatch();
  const { productsList } = useSelector(state => state.cart);

  // Manejar la adición o eliminación de un producto en el carrito.
  const handleAddOrRemoveProduct = (productId) => {
    // Encontrar el producto correspondiente al ID.
    const product = products.find(product => product.id === productId);

    // Verificar si el producto ya está en el carrito y realizar la acción correspondiente.
    if (productsList.find(pdt => pdt.id === productId)) {
      dispatch(removeProductFromCart(productId)); // Eliminar el producto del carrito.
    } else {
      dispatch(addProductToCart(product)); // Agregar el producto al carrito.
    }
  }

  // Renderizar la lista de productos.
  return (
    <>
      <h2>Products</h2>
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-3 mt-3">
            <h4>{product.name}</h4>
            <p><b>Price:</b> {product.price}</p>
            <p><b>Category:</b> {product.category}</p>
            {/* Botón para agregar o quitar productos del carrito */}
            <button
              className={`btn ${productsList.find(pdt => pdt.id === product.id) ? "btn-danger" : "btn-success"}`}
              onClick={() => handleAddOrRemoveProduct(product.id)}
            >
              {productsList.find(pdt => pdt.id === product.id) ? "Remove" : "Add"} to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
