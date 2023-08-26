import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { Layout } from 'src/components';
import {
  ErrorPage,
  RequestsPage,
  CreateParcelPage,
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
        element: <RequestsPage />,
      },
      {
        path: ROUTES.CREATE_REQUEST,
        element: <CreateParcelPage />,
        children: [
          {
            path: ROUTES.CREATE_ORDER,
            element: <OrderPage />,
          },
          {
            path: ROUTES.CREATE_DELIVER,
            element: <DeliverPage />,
          },
        ],
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
