import React, { useState } from 'react';

function Modal() {
  const host = 'http://localhost:8080';
  const apiEndpoint = '/add/employee';
  const apiUrl = `${host}${apiEndpoint}`;
  const [formData, setFormData] = useState({
    Name: '',
    Department: '',
    Address: '',
    Phone: '',
    Email: '',
    agreedToTerms: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('API call successful');
        // Handle success, e.g., redirect, show success message, etc.
      } else {
        console.error('API call failed:', response.status, response.statusText);
        // Handle failure, e.g., show error message
      }
    } catch (error) {
      console.error('API call error:', error.message);
    }
  };

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [id]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        <div className="mb-5">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            id="Name"
            value={formData.Name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder=""
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="department" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Department
          </label>
          <input
            type="text"
            id="Department"
            value={formData.Department}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Address
          </label>
          <input
            type="text"
            id="Address"
            value={formData.Address}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phone
          </label>
          <input
            type="text"
            id="Phone"
            value={formData.Phone}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Email
          </label>
          <input
            type="text"
            id="Email"
            value={formData.Email}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            required
            onChange={handleChange}
          />
        </div>
        <div className="flex items-start mb-5">
          <div className="flex items-center h-5">
            <input
              id="agreedToTerms"
              type="checkbox"
              checked={formData.agreedToTerms}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
              required
              onChange={handleChange}
            />
          </div>
          <label htmlFor="agreedToTerms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            I agree with the{' '}
            <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">
              terms and conditions
            </a>
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </>
  );
}

export default Modal;
