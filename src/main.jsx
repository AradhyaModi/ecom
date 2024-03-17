import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Cart from './Cart';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartSlice from './cartSlice';

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
    <App />
    <Cart />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
