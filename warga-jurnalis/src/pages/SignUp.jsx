import React, { useState } from 'react';
import { Input } from '../components/reusable/input';
import Button from '../components/reusable/button';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    // Lakukan proses registrasi atau pengiriman data registrasi sesuai kebutuhan
  };

  return (
    <div className='p-32'>
      <h2 className="text-2xl font-bold mb-4">Register</h2>
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
        <Input
          label="Confirm Password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button label="Register" onClick={handleRegister} />
        <Link to="/login" className="text-black hover:text-gray-500 transition duration-300 px-4">
            Sudah punya akun? klik disini
        </Link>
      </form>
    </div>
  );
};

export default Register;
