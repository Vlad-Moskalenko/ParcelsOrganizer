import { lazy } from 'react';

const LazyDeliverPage = lazy(() => import('./DeliverPage'));

const DeliverLazyPage = () => <LazyDeliverPage />;

export default DeliverLazyPage;
