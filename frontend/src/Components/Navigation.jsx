import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Navigation() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-lg py-4">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex justify-center space-x-8">
            <li>
              <Link
                to="/"
                className="text-gray-800 hover:text-blue-600 text-lg font-semibold"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/addproduct"
                className="text-gray-800 hover:text-blue-600 text-lg font-semibold"
              >
                Product
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <main className="py-8 px-4">
        <Outlet />
      </main>
    </div>
  );
}

export default Navigation;
