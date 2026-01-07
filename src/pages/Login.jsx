import React from 'react'
import Register from './Register.jsx';

function Login() {
 return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-95 bg-white rounded-2xl shadow-xl px-8 py-10">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-8">
          Login
        </h1>

      
        <div className="mb-5">
          <label className="block text-sm text-gray-600 mb-2">
            Email
          </label>
          <input
            type="text"
            className="w-full h-11.5 border border-gray-300 rounded-xl px-4 outline-none bg-white"
          />
        </div>

        
        <div className="mb-7">
          <label className="block text-sm text-gray-600 mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full h-11.5 border border-gray-300 rounded-xl px-4 outline-none bg-white"
          />
        </div>

        <button
          type="button"
          className="w-full h-12.5 bg-blue-600 text-white rounded-xl font-semibold text-[15px]"
        >
          LOGIN
        </button>

       
        <button
          type="button"
          className="w-full h-12.5 bg-indigo-600 text-white rounded-xl font-semibold text-[15px] mt-4"
        >
          GUEST USER
        </button>

  
        <p className="text-center text-sm text-gray-600 mt-6">
          Not a member yet?
          <span className="text-blue-600 ml-1 cursor-pointer">
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login
