import React, { useState } from 'react';

function AddProduct() {
  const [newProductName, setNewProductName] = useState('');
  const [newProductPrice, setNewProductPrice] = useState('');
  const [newProductImage, setNewProductImage] = useState('');

  const handleAddProduct = async (e) => {
    e.preventDefault();

    if (!newProductName || !newProductPrice || !newProductImage) {
      alert('Please fill in all fields.');
      return;
    }

    const newProduct = {
      name: newProductName,
      price: parseFloat(newProductPrice),
      image: newProductImage,
    };

    try {
      const response = await fetch('https://your-render-api-url/api/products/', { // Replace with your Render API URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      });
      if (response.ok) {
        setNewProductName('');
        setNewProductPrice('');
        setNewProductImage('');
        alert('Product added successfully');
      } else {
        alert('Failed to add product. Please try again.');
      }
    } catch (error) {
      console.error('Error adding product:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <form className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md" onSubmit={handleAddProduct}>
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-900">Add Product</h2>
        
        <div className="mb-4">
          <label htmlFor='name' className="block text-gray-700 font-semibold mb-2">Product Name</label>
          <input
            type='text'
            id='name'
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter product name"
          />
        </div>

        <div className="mb-4">
          <label htmlFor='price' className="block text-gray-700 font-semibold mb-2">Product Price</label>
          <input
            type='number'
            id='price'
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter product price"
          />
        </div>

        <div className="mb-6">
          <label htmlFor='image' className="block text-gray-700 font-semibold mb-2">Product Image URL</label>
          <input
            type='url'
            id='image'
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Enter image URL"
          />
        </div>
        
        <button type='submit' className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-md">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
