import { useAppSelector } from './useAppSelector';

import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'src/redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};