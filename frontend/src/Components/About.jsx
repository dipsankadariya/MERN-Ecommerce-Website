import React from 'react';

function About() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-green-50 to-white py-16">
      <div className="container mx-auto px-6">
        <div className="bg-white shadow-lg rounded-xl p-8 border border-gray-200 flex items-center space-x-6">
          <div className="w-1/3">
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-full h-auto text-green-700"
            >
              <path d="M6 2L3 6v16a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <div className="w-2/3">
            <h1 className="text-5xl font-bold text-green-700 mb-4">
              About NepalMart
            </h1>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to NepalMart, your one-stop destination for all your shopping needs!
            </p>
            <p className="text-md text-gray-600 mb-4">
              At NepalMart, we strive to bring the best of Nepal right to your doorstep. Our mission is to
              offer a wide range of high-quality products that showcase the rich culture, craftsmanship,
              and natural beauty of our country.
            </p>
            <p className="text-md text-gray-600 mb-4">
              From traditional handicrafts to the latest electronics, we have curated products for
              every taste and budget. Whether you're shopping online or in-store, expect exceptional
              customer service and an easy, enjoyable experience.
            </p>
            <p className="text-md text-gray-600">
              Join us in supporting local artisans and businesses, while enjoying the best products Nepal has to offer. NepalMart — where convenience meets Nepali heritage!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
