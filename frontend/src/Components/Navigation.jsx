import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-md py-4">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex-grow"></div>
            <ul className="flex space-x-8 items-center">
              <li>
                <Link
                  to="/"
                  className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold transition duration-300"
                >
                  Home
                </Link>

              </li>

              <li>
                <Link
                  to="/cart"
                  className="text-indigo-600 hover:text-indigo-800 text-lg font-semibold transition duration-300"
                >
                  Cart
                </Link>
                
              </li>
              <li>
                <Link to="/addproduct">
                  <button className="bg-[#14b8a6] text-white py-2 px-4 rounded transition duration-300 hover:bg-[#3A80D2]">
                    Add New Product
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Navigation;
