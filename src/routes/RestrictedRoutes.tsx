import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/hooks/useAuth';

interface RestrictedRouteProps {
  component: React.ComponentType;
  redirectTo?: string;
}

export const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}: RestrictedRouteProps) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};
