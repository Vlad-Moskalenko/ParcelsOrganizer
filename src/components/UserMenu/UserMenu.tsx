import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { FiLogOut } from 'react-icons/fi';

import { logout } from 'src/redux/auth/authOperations';
import { useAuth } from 'src/hooks/useAuth';

import s from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const { user } = useAuth();

  return (
    <div className={s.wrapper}>
      <p className={s.username}>Welcome, {user.name}</p>
      <button className={s.logoutBtn} type="button" onClick={() => dispatch(logout())}>
        <FiLogOut style={{ width: 25, height: 25 }} />
      </button>
    </div>
  );
};
