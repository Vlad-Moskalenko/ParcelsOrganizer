import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { Layout } from 'src/components';
import {
  ErrorPage,
  RequestsPage,
  CreateRequestPage,
  OrderPage,
  DeliverPage,
  RegisterPage,
  LoginPage,
} from 'src/pages';
import { RestrictedRoute } from './RestrictedRoutes';
import { PrivateRoute } from './PrivateRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTES.REQUESTS,
        element: <PrivateRoute redirectTo="/login" component={RequestsPage} />,
      },
      {
        path: ROUTES.CREATE_REQUEST,
        element: <CreateRequestPage />,
      },
      {
        path: ROUTES.CREATE_ORDER,
        element: <PrivateRoute redirectTo="/login" component={OrderPage} />,
      },
      {
        path: ROUTES.CREATE_DELIVER,
        element: <PrivateRoute redirectTo="/login" component={DeliverPage} />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RestrictedRoute redirectTo="/requests" component={RegisterPage} />,
      },
      {
        path: ROUTES.LOGIN,
        element: <RestrictedRoute redirectTo="/requests" component={LoginPage} />,
      },
    ],
  },
]);
