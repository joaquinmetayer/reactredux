import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { ProductsList } from '../components/ProductsList';

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const user = useSelector(state => state.user);

  useEffect(() => {
    console.log(user)
    // Verificar si el usuario está logeado
    if (!user.fullName) {
      // Si el usuario no está logeado, redirigir a la ruta "/"
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    // Cargar productos al montar el componente
    Axios.get("../../data/products.json")
      .then(response => {
        setProducts(response.data.products);
      });
  }, []);

  return (
    <>
      <h2>Home</h2>
      {user.fullName ? (
        <>
          <p>Welcome {user.fullName}!</p>
          <hr />
          <ProductsList products={products} />
        </>
      ) : (
        // Si el usuario no está logeado, no renderizar el contenido
        <p>Please log in to view this content.</p>
      )}
    </>
  );
};
