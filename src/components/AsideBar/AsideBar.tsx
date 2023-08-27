import { NavLink } from 'react-router-dom';
import { ROUTES } from 'src/routes/routes.const';

import s from './AsideBar.module.scss';

export const AsideBar = () => {
  return (
    <aside className={s.aside}>
      <nav className={s.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to={ROUTES.CREATE_ORDER}
        >
          CREATE ORDER
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? s.active : s.link)}
          to={ROUTES.CREATE_DELIVER}
        >
          CREATE DELIVER
        </NavLink>
      </nav>
    </aside>
  );
};
