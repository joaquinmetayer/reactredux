import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

// Redux
import { Provider } from 'react-redux';
import store from "./app/store";

import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Proporcionar el store de Redux a la aplicación utilizando el componente 'Provider' */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
