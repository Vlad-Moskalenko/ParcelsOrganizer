import { NavLink } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';

import s from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav>
      <NavLink className={s.link} to={ROUTES.REQUESTS}>
        Parcels
      </NavLink>
      <NavLink className={s.link} to={ROUTES.CREATE_REQUEST}>
        Create Parcel
      </NavLink>
    </nav>
  );
};
