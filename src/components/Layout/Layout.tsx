import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Spinner } from '..';
import s from './Layout.module.scss';

export const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Spinner />}>
        <main className={s.main}>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
