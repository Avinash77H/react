import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Handle login logic
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 w-full ">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-[#7886C7] transition duration-200"
        >
          Login
        </button>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <button
          onClick={() => {/* Redirect to Signup */}}
          className="w-full text-blue-500 mt-4 hover:underline"
        >
          Redirect to Signup
        </button>
      </div>
    </div>
  );
};

export default Login;