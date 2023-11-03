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
    // Kirim permintaan ke API pengguna
    fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/users')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);
  
        if (user) {
          // Jika pengguna ditemukan, set autentikasi menggunakan context
          login(email, password);
          // Arahkan ke halaman News Form
          navigate('/news-form');
        } else {
          // Jika pengguna tidak ditemukan, tampilkan pesan kesalahan
          setError('Email atau password salah');
        }
      })
      .catch((error) => {
        // Tambahkan logika untuk menangani kesalahan jika diperlukan
        console.error('Terjadi kesalahan', error);
      });
  };
  

  return (
    <div className='bg-white h-screen'>
      <Header />
      <div className='p-28'>
        <Link to={`/`}>
          <Button label="Back" />
        </Link>
        <h2 className="text-2xl text-black font-bold mb-4">Login</h2>
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
