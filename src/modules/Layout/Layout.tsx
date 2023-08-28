import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '..';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p className="text">Loading...</p>}>
        <main className={s.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
