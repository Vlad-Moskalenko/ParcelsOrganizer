import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { MainLayout } from 'src/modules';
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
