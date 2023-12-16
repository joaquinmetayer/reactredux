import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

import { setUser } from '../reducers/user/userSlice';

// Componente de la página de inicio de sesión
export const Index = () => {
  // Refs para los campos de correo electrónico y contraseña
  const emailField = useRef(null);
  const passwordField = useRef(null);

  // Función de navegación y despacho de acciones de Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Manejar el envío del formulario
  const handleSubmit = e => {
    e.preventDefault();

    // Hacer una solicitud HTTP para obtener los usuarios desde un archivo JSON
    Axios.get("../../data/users.json")
      .then(response => {
        console.log(response.data.users)
        const users = response.data.users;

        // Encontrar el usuario correspondiente al correo electrónico proporcionado
        const userToLog = users.find(user => user.email === emailField.current.value);

        // Verificar las credenciales del usuario
        if (userToLog) {
          if (userToLog.password === passwordField.current.value) {
            console.log("Valid credentials");

            // Despachar la acción para establecer al usuario autenticado en el estado de Redux
            dispatch(setUser({
              email: userToLog.email,
              fullName: `${userToLog.first_name} ${userToLog.last_name}`,
              token: Date.now(),
            }));

            // Navegar a la página de inicio después de una autenticación exitosa
            navigate("/home");
          }
        }
      })
  }

  // Renderizar el formulario de inicio de sesión
  return (
    <div className="row">
      <div className="col-6">
        <h2 className="mb-4">Login form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email" className="form-control" ref={emailField} placeholder="test@test.com"/>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" ref={passwordField} placeholder="test" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
}
