// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
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

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Cart;
