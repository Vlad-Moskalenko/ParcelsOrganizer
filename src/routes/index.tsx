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
        element: <CreateRequestPage />,
      },
      {
        path: ROUTES.CREATE_ORDER,
        element: <OrderPage />,
      },
      {
        path: ROUTES.CREATE_DELIVER,
        element: <DeliverPage />,
      },
      {
        path: ROUTES.REGISTER,
        element: <RegisterPage />,
      },
      {
        path: ROUTES.LOGIN,
        element: <LoginPage />,
      },
    ],
  },
]);
