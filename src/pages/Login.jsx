import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { loginSchema } from 'schemas/loginSchema';

export const Login = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(loginSchema) });
  const [showPass, setShowPass] = useState(false);
  const submit = data => {
    console.log('login data ->>>', data);

    reset();
  };
  return (
    <div className="max-w-sm mx-auto">
      <h2 className="text-gray-600 text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit(submit)}>
        <div className="mb-4">
          <input
            {...register('email')}
            type="text"
            placeholder="Insert your email"
            className="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-full focus:nm-inset-gray-300 focus:outline-none"
          />
          <p className="px-2 pt-1 text-red-500 text-sm text-center">
            {errors.email?.message}
          </p>
        </div>
        <div className="mb-4 relative">
          <input
            {...register('password')}
            type={showPass ? 'text' : 'password'}
            placeholder="Insert your password"
            className="appearance-none rounded-full nm-inset-gray-200 leading-5 px-8 py-4 flex-grow sm:w-full focus:nm-inset-gray-300 focus:outline-none"
          />
          <p className="px-2 pt-1 text-red-500 text-sm text-center">
            {errors.password?.message}
          </p>
          <button type="button" onClick={() => setShowPass(prev => !prev)}>
            {showPass ? (
              <FaEye className="absolute right-6 top-4 scale-150" />
            ) : (
              <FaEyeSlash className="absolute right-6 top-4 scale-150" />
            )}
          </button>
        </div>

        <div className="flex justify-center sm:justify-center pt-1">
          <button
            type="submit"
            className="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 text-gray-600 font-bold  transition duration-200 ease-in-out transform hover:scale-110"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
