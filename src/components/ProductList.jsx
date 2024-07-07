// src/components/ProductList.jsx
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Product from './Product';
import PropTypes from 'prop-types';

const ProductList = ({ addToCart, removeFromCart, cartItems }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/data/products.json') // Ensure this path is correct
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cartItems={cartItems}
          />
        ))}
      </div>
    </div>
  );
};

ProductList.propTypes = {
  addToCart: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default ProductList;
