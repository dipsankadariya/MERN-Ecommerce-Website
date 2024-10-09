import React, { useState, useEffect } from 'react';

const defaultProducts = [
  { id: 1, name: 'Product 1', price: 19.99, image: '#' },
  { id: 2, name: 'Product 2', price: 29.99, image: '#' },
  { id: 3, name: 'Product 3', price: 39.99, image: '#' },
  { id: 4, name: 'Product 4', price: 49.99, image: '#' },
];

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data.data.length > 0 ? data.data : defaultProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(defaultProducts);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
        Our Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
            key={product._id || product.id}
          >
            <img
              className="w-full h-48 object-cover rounded-lg mb-4"
              src={product.image}
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <p className="text-xl font-bold text-gray-800 mt-2">
              ${product.price.toFixed(2)}
            </p>
          </div>
        ))}
      
      </div>
    </div>
  );
}

export default Home;
