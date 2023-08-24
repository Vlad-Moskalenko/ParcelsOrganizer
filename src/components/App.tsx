import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAuth } from 'src/hooks/useAuth';
import { refresh } from 'src/redux/auth/authOperations';
import { router } from 'src/routes';
import { Spinner } from './Spinner/Spinner';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectToken } from 'src/redux/auth/authSelectors';

export const App = () => {
  const dispatch = useAppDispatch();
  const { isRefreshing } = useAuth();
  const token = useAppSelector(selectToken);

  useEffect(() => {
    if (token) {
      dispatch(refresh());
    }
  }, [dispatch, token]);

  return isRefreshing ? (
    <Spinner />
  ) : (
    <RouterProvider router={router} fallbackElement={<Spinner />} />
  );
};
