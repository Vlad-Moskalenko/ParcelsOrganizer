import { Navigation } from '../Navigation/Navigation';

import { useAuth } from 'src/hooks/useAuth';
import { UserMenu, AuthNav } from '..';

import s from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
