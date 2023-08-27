import { AppBar } from '@mui/material';

import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'src/hooks/useAuth';
import { UserMenu, AuthNav } from '..';

import s from './Header.module.scss';

export const Header = () => {
  const { isLoggedIn } = useAuth();

  return (
    <AppBar className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
