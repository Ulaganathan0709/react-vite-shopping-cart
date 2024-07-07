# React Vite Shopping Cart

This is a simple shopping cart application built with React and Vite, styled with Bootstrap. The application allows users to add and remove items from the cart.

## Features

- Display a list of available products with their name, description, price, and image.
- Add items to the cart by clicking the "Add to Cart" button.
- Remove items from the cart by clicking the "Remove from Cart" button.
- Update the cart quantity number when items are added or removed.

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For the development build tool.
- **Bootstrap**: For styling the application.
- **PropTypes**: For type-checking of props.
- **State Management**: Using React's `useState` hook to manage the state of the shopping cart.

## Installation

To get started with the project, clone the repository and install the dependencies:

```sh
git clone https://github.com/Ulaganathan0709/react-vite-shopping-cart
cd react-vite-shopping-cart
npm install
npm install bootstrap-react
npm install prop-types
npm run dev

## Project Structure

react-vite-shopping-cart/
├── public/
│   ├── index.html
│   └── data/
│       └── products.json
├── src/
│   ├── components/
│   │   ├── Cart.jsx
│   │   ├── Product.jsx
│   │   └── ProductList.jsx
│   ├── App.jsx
│   ├── main.jsx
│   ├── styles/
│   │   └── App.css
├── .gitignore
├── package.json
├── vite.config.js
├── README.md

## Accessing the Deployed Application
You can view a live demo of the application at: [Check out the USK Shopping Cart](https://uskshoppingcart.netlify.app/)>