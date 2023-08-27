import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAppSelector } from 'src/hooks/useAppSelector';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { selectUser } from 'src/redux/auth/authSelectors';
import { logout } from 'src/redux/auth/authOperations';

import s from './UserMenu.module.scss';

export const UserMenu = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div className={s.wrapper}>
      <p>
        Welcome, <b>{user.email}</b>
      </p>
      <IconButton color="inherit" className={s.logoutBtn} onClick={() => dispatch(logout())}>
        <LogoutIcon />
      </IconButton>
    </div>
  );
};
