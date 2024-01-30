import React from 'react';

export const Register = () => {
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-gray-600 text-xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Insert your name"
            className="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-full focus:nm-inset-gray-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Insert your email"
            className="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-full focus:nm-inset-gray-300 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Insert your password"
            className="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-full focus:nm-inset-gray-300 focus:outline-none"
          />
        </div>

        <div className="flex justify-center sm:justify-center pt-1">
          <button
            type="submit"
            className="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 text-gray-600 font-bold  transition duration-200 ease-in-out transform hover:scale-110"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};
