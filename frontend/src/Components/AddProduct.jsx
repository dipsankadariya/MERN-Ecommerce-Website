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
      const response = await fetch('/api/products/', {
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
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleAddProduct}>
        <h2 className="text-2xl font-bold mb-4 text-center">Add Product</h2>
        
        <div className="mb-4">
          <label htmlFor='name' className="block text-gray-700 font-semibold mb-2">Product Name:</label>
          <input
            type='text'
            id='name'
            value={newProductName}
            onChange={(e) => setNewProductName(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor='price' className="block text-gray-700 font-semibold mb-2">Product Price:</label>
          <input
            type='number'
            id='price'
            value={newProductPrice}
            onChange={(e) => setNewProductPrice(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor='image' className="block text-gray-700 font-semibold mb-2">Product Image:</label>
          <input
            type='url'
            id='image'
            value={newProductImage}
            onChange={(e) => setNewProductImage(e.target.value)}
            required
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <button type='submit' className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 transition duration-200">Add Product</button>
      </form>
    </div>
  );
}

export default AddProduct;
