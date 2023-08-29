import { createBrowserRouter } from 'react-router-dom';

import { ROUTES } from './routes.const';

import { MainLayout } from 'src/modules';
import { RestrictedRoute } from './RestrictedRoutes';

import ParcelsLazyPage from '../pages/ParcelsPage/ParcelsLazyPage';
import CreateParcelLazyPage from '../pages/CreateParcelPage/CreateParcelLazyPage';
import DeliverLazyPage from '../pages/DeliverPage/DeliverLazyPage';
import OrderLazyPage from '../pages/OrderPage/OrderLazyPage';
import LoginLazyPage from '../pages/LoginPage/LoginLazyPage';
import RegisterLazyPage from '../pages/RegisterPage/RegisterLazyPage';
import ErrorLazyPage from '../pages/ErrorPage/ErrorLazyPage';
import WelcomeLazyPage from 'src/pages/WelcomePage/WelcomeLazyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorLazyPage />,
    children: [
      {
        index: true,
        element: <WelcomeLazyPage />,
      },
      {
        path: ROUTES.REQUESTS,
        element: <ParcelsLazyPage />,
      },
      {
        path: ROUTES.CREATE_REQUEST,
        element: <CreateParcelLazyPage />,
        children: [
          {
            path: ROUTES.CREATE_ORDER,
            element: <OrderLazyPage />,
          },
          {
            path: ROUTES.CREATE_DELIVER,
            element: <DeliverLazyPage />,
          },
        ],
      },
      {
        path: ROUTES.REGISTER,
        element: <RestrictedRoute redirectTo={ROUTES.REQUESTS} component={RegisterLazyPage} />,
      },
      {
        path: ROUTES.LOGIN,
        element: <RestrictedRoute redirectTo={ROUTES.REQUESTS} component={LoginLazyPage} />,
      },
    ],
  },
]);
