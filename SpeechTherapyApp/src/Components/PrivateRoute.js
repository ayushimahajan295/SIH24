// PrivateRoute.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {
  const { isAuthenticated, isLoading } = useAuth0();

  // Show loading state while checking if the user is authenticated
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // If the user is not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // If the user is authenticated, allow them to view the protected route
  return children;
}

export default PrivateRoute;
