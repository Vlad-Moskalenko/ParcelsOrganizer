import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { current } from 'src/redux/auth/authOperations';
import { router } from 'src/routes';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectToken } from 'src/redux/auth/authSelectors';
import { Spinner } from '.';

export const App = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(current());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <RouterProvider
      router={router}
      fallbackElement={<Spinner />}
      future={{ v7_startTransition: true }}
    />
  );
};
