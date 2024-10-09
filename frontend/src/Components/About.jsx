import React from 'react';

function About() {
  return (
    <main className='bg-gradient-to-b from-green-100 to-white min-h-screen py-12'>
      <div className='container mx-auto px-6'>
        <div className='bg-white shadow-lg rounded-lg p-10 border border-gray-200'>
          <h1 className='text-4xl font-extrabold text-gray-800 mb-6'>About NepalMart</h1>
          <p className='text-lg text-gray-700 mb-4'>
            Welcome to NepalMart, your one-stop destination for all your shopping needs!
          </p>
          <p className='text-lg text-gray-700 mb-4'>
            At NepalMart, we believe in bringing the best of Nepal right to your doorstep. Our mission
            is to provide a diverse range of high-quality products that celebrate the rich culture,
            craftsmanship, and natural beauty of our country.
          </p>
          <p className='text-lg text-gray-700 mb-4'>
            From traditional handicrafts to modern electronics, we curate products that cater to
            every taste and budget. Our commitment to exceptional customer service ensures a
            seamless shopping experience, whether you're browsing online or visiting our store.
          </p>
          <p className='text-lg text-gray-700 mb-4'>
            Join us as we embark on a journey to promote local artisans and businesses, while also
            making it easy for you to shop for the best products Nepal has to offer. Experience
            convenience, quality, and a touch of Nepali heritage with NepalMart!
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
