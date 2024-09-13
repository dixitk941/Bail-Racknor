import React from 'react';

const RegisterPage = () => {
  return (
    <main className="container mx-auto p-8 max-w-md">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Email</label>
          <input type="email" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Password</label>
          <input type="password" className="w-full p-2 border border-gray-300 rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700">
          Register
        </button>
      </form>
    </main>
  );
};

export default RegisterPage;
