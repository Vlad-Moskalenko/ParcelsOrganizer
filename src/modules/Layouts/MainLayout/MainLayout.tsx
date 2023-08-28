import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AppBar } from '../..';
import s from './MainLayout.module.scss';

export const MainLayout = () => {
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
