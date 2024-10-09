import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Components/Home';
import AddProduct from './Components/AddProduct';
import Navigation from './Components/Navigation';
import Cart from './Components/Cart';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigation />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: 'addproduct',
          element: <AddProduct />,
        },
        {
           path:"cart",
           element:<Cart/>
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
