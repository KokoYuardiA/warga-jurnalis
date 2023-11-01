import React, { useState } from 'react';
import { Input } from '../components/reusable/input';
import Button from '../components/reusable/button';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../utils/api/auth/api';
import Header from '../components/header';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [error, setError] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();

    // Validasi email dan password
    if (!email || !password) {
      setError('Email dan password harus diisi');
      return;
    }
    login(email, password);
    navigate('/news-form');
    
  };

  return (
    <div>
      <Header />
      <div className='p-32'>
        <Link to={`/`}>
          <Button label="Back" />
        </Link>
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <Input
            label="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 mb-2">{error}</p>}
          <Button label="Login" onClick={handleLogin} />
          <Link to="/signup" className="text-black hover:text-gray-500 transition duration-300 px-4">
              Belum punya akun? klik disini
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
