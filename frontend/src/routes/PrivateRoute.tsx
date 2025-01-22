// frontend/src/routes/PrivateRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute: React.FC<{children:React.ReactNode}> = ({children}) => {
  const {token} = useAuth();
  if(!token) return <Navigate to="/login" />;
  return <>{children}</>;
}
