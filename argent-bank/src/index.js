import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/footer/footer';
import App from './app';
import './main.css'

//redux

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './redux/reducers/index.js'
const store = configureStore({
  reducer: rootReducer,
  devTools: true,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
