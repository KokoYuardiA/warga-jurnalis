import React from 'react';
import { useAuth } from '../utils/api/auth/api'; // Sesuaikan dengan struktur folder Anda
import { Navigate, Route } from 'react-router-dom';

const ProtectedRoute = ({ path, element }) => {
  const { auth } = useAuth();

  if (auth === 'authenticated') {
    return <Route path={path} element={element} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
