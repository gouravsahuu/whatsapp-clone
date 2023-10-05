import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');

  const handleLogin = () => {
    // Add logic here to handle user login and authentication.
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
