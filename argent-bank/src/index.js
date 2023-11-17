import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import App from './app';
import './main.css'

import { Provider } from 'react-redux';
import store from "./app/store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <Footer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
