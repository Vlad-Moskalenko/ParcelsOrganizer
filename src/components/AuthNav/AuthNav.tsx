import { NavLink, useLocation } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';
import s from './AuthNav.module.scss';

export const AuthNav = () => {
  const { pathname } = useLocation();

  return pathname === '/login' ? (
    <NavLink className={s.link} to={ROUTES.REGISTER}>
      Register
    </NavLink>
  ) : (
    <NavLink className={s.link} to={ROUTES.LOGIN}>
      Login
    </NavLink>
  );
};
