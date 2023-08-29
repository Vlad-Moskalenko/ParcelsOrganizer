import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { MainLayout } from 'src/modules';
import { RestrictedRoute } from './RestrictedRoutes';

import ParcelsPage from '../pages/ParcelsPage/ParcelsPage';
import CreateParcelPage from '../pages/CreateParcelPage/CreateParcelPage';
import DeliverPage from '../pages/DeliverPage/DeliverPage';
import OrderPage from '../pages/OrderPage/OrderPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import WelcomePage from 'src/pages/WelcomePage/WelcomePage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <WelcomePage />,
      },
      {
        path: ROUTES.REQUESTS,
        element: <ParcelsPage />,
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
        element: <RestrictedRoute redirectTo={ROUTES.REQUESTS} component={RegisterPage} />,
      },
      {
        path: ROUTES.LOGIN,
        element: <RestrictedRoute redirectTo={ROUTES.REQUESTS} component={LoginPage} />,
      },
    ],
  },
]);
