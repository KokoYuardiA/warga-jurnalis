import React, { useState } from 'react';
import { Input } from '../components/reusable/input';
import Button from '../components/reusable/button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lakukan proses autentikasi atau pengiriman data login sesuai kebutuhan
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button label="Login" onClick={handleLogin} />
        <Link to="/signup" className="text-black hover:text-gray-500 transition duration-300 px-4">
            Belum punya akun? klik disini
        </Link>
      </form>
    </div>
  );
};

export default Login;
