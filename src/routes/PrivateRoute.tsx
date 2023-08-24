import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

interface PrivateRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

export const PrivateRoute = ({ component: Component, redirectTo = '/' }: PrivateRouteProps) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
