import React from 'react';

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "55509243-c457-4fa7-bdfc-b403fa6a81e0");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className='w-full max-w-xl p-10 bg-white shadow-lg rounded-xl'>
        <h2 className='text-3xl font-bold mb-8 text-gray-800 text-center'>Get in Touch</h2>
        <form onSubmit={onSubmit} className='space-y-6'>
          <div>
            <label className='block mb-2 text-lg font-medium text-gray-600' htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Your Name'
              className='w-full border border-gray-300 p-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-lg font-medium text-gray-600' htmlFor='email'>Email</label>
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Your Email'
              className='w-full border border-gray-300 p-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200'
              required
            />
          </div>
          <div>
            <label className='block mb-2 text-lg font-medium text-gray-600' htmlFor='message'>Message</label>
            <textarea
              name='message'
              id='message'
              placeholder='Your Message'
              className='w-full border border-gray-300 p-4 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-sky-400 transition duration-200'
              rows='6'
              required
            ></textarea>
          </div>
          <button
            type='submit'
            className='w-full bg-sky-500 text-white font-semibold p-3 rounded-md shadow-md hover:bg-sky-600 transition duration-300'
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
