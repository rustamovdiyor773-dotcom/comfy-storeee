import React from 'react';
import Login from './Login.jsx';

export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-105 bg-white rounded-2xl shadow-xl px-10 py-12">
        <h1 className="text-3xl font-semibold text-center text-slate-700 mb-10">
          Register
        </h1>

     
        <div className="mb-7">
          <label className="block text-[17px] text-slate-700 mb-3">
            Username
          </label>
          <input
            type="text"
            className="w-full h-13 border border-slate-300 rounded-xl px-4 outline-none"
          />
        </div>

      
        <div className="mb-7">
          <label className="block text-[17px] text-slate-700 mb-3">
            Email
          </label>
          <input
            type="text"
            className="w-full h-13 border border-slate-300 rounded-xl px-4 outline-none"
          />
        </div>

     
        <div className="mb-10">
          <label className="block text-[17px] text-slate-700 mb-3">
            Password
          </label>
          <input
            type="password"
            className="w-full h-13 border border-slate-300 rounded-xl px-4 outline-none"
          />
        </div>

      
        <button
          type="button"
          className="w-full h-14 bg-blue-600 text-white rounded-xl text-[16px] font-semibold"
        >
          REGISTER
        </button>

        
        <p className="text-center text-[17px] text-slate-700 mt-8">
          Already a member?
          <span className="text-blue-600 ml-2 cursor-pointer">
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
