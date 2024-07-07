// src/components/Product.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = ({ product, addToCart, removeFromCart, cartItems }) => {
  const isInCart = cartItems.includes(product.id);

  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img className="card-img-top" src={product.image} alt={product.name} />
        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{product.name}</h5>
            <p>{product.description}</p>
            <div>{product.price}</div>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
          <div className="text-center">
            {isInCart ? (
              <button className="btn btn-outline-danger mt-auto" onClick={() => removeFromCart(product.id)}>
                Remove from Cart
              </button>
            ) : (
              <button className="btn btn-outline-dark mt-auto" onClick={() => addToCart(product.id)}>
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
