import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import App from './app';
import './main.css'

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
