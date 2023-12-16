import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { unsetUser } from './reducers/user/userSlice';
import { useNavigate } from 'react-router-dom';

// Importar los componentes de las páginas
import { Index } from './pages/Index';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

// Componente principal de la aplicación
export const App = () => {
  // Obtener datos del estado global con 'useSelector'
  const { totalCount } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.user);

  // Obtener la función de despacho y la función de navegación
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Manejar el cierre de sesión
  const handleLogout = () => {
    console.log('Logging out');
    dispatch(unsetUser()); // Despachar la acción para desestablecer al usuario
    navigate('/'); // Redirigir a la página de inicio
  };

  // Renderizar la interfaz de usuario
  return (
    <div className="container">
      <div className="d-flex py-4 pb-2">
        {/* Botón de inicio de sesión si el usuario no está autenticado */}
        {!user.fullName ? (
          <Link className="btn btn-info" to="/">
            Login
          </Link>
        ) : null}

        {/* Botones de navegación y cierre de sesión si el usuario está autenticado */}
        {user.fullName ? (
          <span>
            <Link className="btn btn-info" to="/home">
              Home
            </Link>
            <button className="btn btn-primary mx-4" onClick={handleLogout}>
              Log out
            </button>
          </span>
        ) : null}

        {/* Enlace al carrito con el contador de productos */}
        <div className="ms-auto">
          <Link className="btn btn-primary position-relative" to="/cart">
            Cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {totalCount}
              <span className="visually-hidden">products in cart</span>
            </span>
          </Link>
        </div>
      </div>
      <hr />

      {/* Configuración de las rutas y sus componentes asociados */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};
