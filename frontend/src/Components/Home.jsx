import React, { useState, useEffect } from 'react';

const defaultProducts = [
  { id: 1, name: 'Product 1', price: 19.99, image: '/api/placeholder/300/200' },
  { id: 2, name: 'Product 2', price: 29.99, image: '/api/placeholder/300/200' },
  { id: 3, name: 'Product 3', price: 39.99, image: '/api/placeholder/300/200' },
  { id: 4, name: 'Product 4', price: 49.99, image: '/api/placeholder/300/200' },
];

function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [editProduct, setEditProduct] = useState(null);
  const [formData, setFormData] = useState({ name: '', price: '', image: '' });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        const fetchedProducts = data.data.length > 0 ? data.data : defaultProducts;
        const productsWithIds = fetchedProducts.map((product, index) => ({
          ...product,
          id: product.id || product._id || `default-${index}`,
        }));
        setProducts(productsWithIds);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts(defaultProducts);
      }
    };

    fetchProducts();
  }, []);

  const removeItem = async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Failed to delete the item');
      }

      setProducts((prevProducts) => prevProducts.filter(product => product.id !== id));
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setFormData({ name: product.name, price: product.price, image: product.image });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`/api/products/${editProduct.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to update the product');
      }

      const updatedProduct = await response.json();
      setProducts((prevProducts) =>
        prevProducts.map((product) => (product.id === updatedProduct.data._id ? updatedProduct.data : product))
      );

      setEditProduct(null);
      setFormData({ name: '', price: '', image: '' });
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-extrabold text-center text-indigo-900 mb-12">
          Discover Our Collection
        </h1>

        <div className='mb-8'>
          <input
            type='text'
            placeholder='Search Products'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full p-3 border border-gray-300 rounded-lg'
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="relative">
                <img
                  className="w-full h-64 object-cover"
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2">
                  {product.name}
                </h2>
                <p className="text-2xl font-extrabold text-indigo-600 mb-4">
                  ${product.price.toFixed(2)}
                </p>
                <button className="w-full bg-indigo-600 text-white text-lg font-semibold py-2 px-4 rounded-full shadow-md transition duration-300 hover:bg-indigo-700 flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
              <div className="bg-gray-100 px-6 py-4 flex justify-between">
                <button
                  className="flex items-center text-indigo-600 hover:text-indigo-800 transition duration-300"
                  onClick={() => handleEditClick(product)}
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Update
                </button>
                <button
                  className="flex items-center text-red-600 hover:text-red-800 transition duration-300"
                  onClick={() => removeItem(product.id)}
                >
                  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Update Product Form Modal */}
        {editProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md mx-auto">
              <h2 className="text-2xl font-bold mb-4">Update Product</h2>
              <form onSubmit={handleUpdateSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="name">Product Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="price">Price</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1" htmlFor="image">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    value={formData.image}
                    onChange={handleFormChange}
                    className="w-full p-2 border border-gray-300 rounded"
                    required
                  />
                </div>
                <div className="flex justify-between">
                  <button type="button" className="bg-gray-300 text-gray-700 py-2 px-4 rounded" onClick={() => setEditProduct(null)}>
                    Cancel
                  </button>
                  <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
