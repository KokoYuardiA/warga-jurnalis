import React, { useState } from 'react';
import { Input } from '../components/reusable/input';
import Button from '../components/reusable/button';
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/header'

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');



  const handleRegister = (event) => {
    event.preventDefault(); 
    // Reset pesan kesalahan
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');
  
    // Validasi email
    if (!email) {
      setEmailError('Email harus diisi');
    } else if (!isValidEmail(email)) {
      setEmailError('Email tidak valid');
    }
  
    // Validasi password
    if (!password) {
      setPasswordError('Password harus diisi');
    } else if (password.length < 6) {
      setPasswordError('Password harus memiliki minimal 6 karakter');
    }
  
    // Validasi konfirmasi password
    if (password !== confirmPassword) {
      setConfirmPasswordError('Konfirmasi password tidak sesuai');
    }
  
    // Jika tidak ada kesalahan, lanjutkan dengan proses registrasi
    if (!emailError && !passwordError && !confirmPasswordError) {
      // Lakukan proses registrasi atau pengiriman data registrasi sesuai kebutuhan
    }

    if (!emailError && !passwordError && !confirmPasswordError) {
      // Data yang akan dikirim ke API
      const userData = {
        email,
        password,
      };

      // Kirim data ke API
      fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })
        .then((response) => {
          if (response.ok) {
            // Data berhasil dikirim, tampilkan alert
            alert('Registrasi berhasil');
          } else {
            // Jika terjadi kesalahan dalam pengiriman data
            alert('Terjadi kesalahan dalam registrasi');
          }
        })
        .catch((error) => {
          // Tangani kesalahan jaringan
          console.error('Error:', error);
          alert('Terjadi kesalahan jaringan');
        });
    }
  };

  function isValidEmail(email) {
    // Gunakan ekspresi reguler untuk memeriksa validitas email
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  }
  
  

  return (
    <div>
      <Header />
      <div className='p-32'>
        <Link to={"/"}>
          <Button label="Back"/>
        </Link>
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <form>
          <Input
            label="Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          {emailError && <p className="text-red-500">{emailError}</p>}
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
          {passwordError && <p className="text-red-500">{passwordError}</p>}

          <Input
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={confirmPasswordError}
          />
          {confirmPasswordError && <p className="text-red-500">{confirmPasswordError}</p>}
          
          <Button label="Register" onClick={handleRegister} />
          <Link to="/login" className="text-black hover:text-gray-500 transition duration-300 px-4">
              Sudah punya akun? klik disini
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
