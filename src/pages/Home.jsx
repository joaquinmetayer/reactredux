import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { ProductsList } from '../components/ProductsList';

// Componente de la página principal (Home)
export const Home = () => {
  // Función de navegación y estados locales
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  
  // Obtener el estado del usuario desde Redux
  const user = useSelector(state => state.user);

  // Efecto secundario para verificar si el usuario está logeado
  useEffect(() => {
    console.log(user);

    // Verificar si el usuario no está logeado y redirigir a la página de inicio de sesión
    if (!user.fullName) {
      navigate("/");
    }
  }, [user, navigate]);

  // Efecto secundario para cargar productos al montar el componente
  useEffect(() => {
    Axios.get("../../data/products.json")
      .then(response => {
        setProducts(response.data.products);
      });
  }, []);

  // Renderizar la interfaz de usuario
  return (
    <>
      <h2>Home</h2>
      {user.fullName ? (
        // Mostrar contenido si el usuario está logeado
        <>
          <p>Welcome {user.fullName}!</p>
          <hr />
          {/* Componente para mostrar la lista de productos */}
          <ProductsList products={products} />
        </>
      ) : (
        // Mostrar mensaje si el usuario no está logeado
        <p>Please log in to view this content.</p>
      )}
    </>
  );
};
