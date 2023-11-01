import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const storedAuth = localStorage.getItem('auth');
    return storedAuth || null;
  });

  const login = (email, password) => {
    // Simulasikan proses autentikasi dengan email dan kata sandi
    fetch('https://65411d03f0b8287df1fdd439.mockapi.io/api/1/users')
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((user) => user.email === email && user.password === password);

        if (user) {
          setAuth('authenticated');
          localStorage.setItem('auth', 'authenticated');
        } else {
          console.error('Autentikasi gagal: email atau kata sandi salah');
        }
      })
      .catch((error) => {
        console.error('Terjadi kesalahan', error);
      });
  };

  const logout = () => {
    setAuth(null);
    localStorage.removeItem('auth');
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
