import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar, Spinner } from '..';
import s from './Layout.module.css';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <main className={s.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
