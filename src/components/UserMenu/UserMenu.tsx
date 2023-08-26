import LogoutIcon from '@mui/icons-material/Logout';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { logout } from 'src/redux/auth/authOperations';

import s from './UserMenu.module.scss';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectUser } from 'src/redux/auth/authSelectors';

export const UserMenu = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <div className={s.wrapper}>
      <p>
        Welcome, <b>{user.email}</b>
      </p>
      <button className={s.logoutBtn} onClick={() => dispatch(logout())}>
        <LogoutIcon />
      </button>
    </div>
  );
};
