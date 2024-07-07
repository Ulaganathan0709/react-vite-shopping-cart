// src/components/Cart.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Shopping Cart</h2>
          <p>Items in cart: {cartItems.length}</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
