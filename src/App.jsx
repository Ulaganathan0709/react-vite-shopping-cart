// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (productId) => {
    setCartItems([...cartItems, productId]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((id) => id !== productId));
  };

  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Shop Homepage</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#!">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#!">Shop</a>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="button">
                <i className="bi bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartItems.length}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
      <header className="bg-dark py-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-white">
            <h1 className="display-4 fw-bolder">Choose Your Mobile</h1>
            <p className="lead fw-normal text-white-50 mb-0">Take your favorite feature mobile</p>
          </div>
        </div>
      </header>
      <ProductList addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      <Cart cartItems={cartItems} />
    </div>
  );
}

export default App;
