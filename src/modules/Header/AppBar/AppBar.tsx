import { AppBar as MuiAppBar } from '@mui/material';

import { Navigation } from '../Navigation/Navigation';
import { useAuth } from 'src/hooks/useAuth';
import { UserMenu, AuthNav } from '..';

import s from './AppBar.module.scss';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <MuiAppBar className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </MuiAppBar>
  );
};
