import { Button } from '@mui/material';

import { NavLink } from 'react-router-dom';
import { ROUTES } from 'src/routes/routes.const';

import s from './AsideBar.module.scss';

export const AsideBar = () => {
  return (
    <aside className={s.aside}>
      <nav className={s.nav}>
        <Button variant="text" component={NavLink} to={ROUTES.CREATE_ORDER}>
          CREATE ORDER
        </Button>
        <Button variant="text" component={NavLink} to={ROUTES.CREATE_DELIVER}>
          CREATE DELIVER
        </Button>
      </nav>
    </aside>
  );
};
