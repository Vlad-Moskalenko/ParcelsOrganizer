import { NavLink } from 'react-router-dom';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';

import { ROUTES } from 'src/routes/routes.const';
import s from './AuthNav.module.scss';

export const AuthNav = () => {
  return (
    <NavLink className={({ isActive }) => (isActive ? s.active : s.authLink)} to={ROUTES.LOGIN}>
      <AppRegistrationIcon />
    </NavLink>
  );
};
