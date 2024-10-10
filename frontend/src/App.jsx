import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import Navigation from './Components/Navigation';
import Cart from './Components/Cart';
import About from './Components/About';
import Contact from './Components/Contact';

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add items to the cart
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [
        {
          index: true,
          element: <Home addToCart={addToCart} />,  // Pass addToCart to Home
        },
        {
          path: 'addproduct',
          element: <AddProduct />,
        },
        {
          path: 'cart',
          element: <Cart cartItems={cartItems} />,  // Pass cartItems to Cart
        },
        {
          path: 'about',
          element: <About />,
        },
        {
          path: 'contacts',
          element: <Contact />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
