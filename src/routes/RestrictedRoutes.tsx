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
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};
