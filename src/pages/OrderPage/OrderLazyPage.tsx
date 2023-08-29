import { lazy } from 'react';

const LazyOrderPage = lazy(() => import('./OrderPage'));

const OrderLazyPage = () => <LazyOrderPage />;

export default OrderLazyPage;
