import { NavLink } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';

import s from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : 'link')}
            to={ROUTES.REQUESTS}
          >
            Parcels
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? s.active : 'link')}
            to={ROUTES.CREATE_REQUEST}
          >
            Create Parcel
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
