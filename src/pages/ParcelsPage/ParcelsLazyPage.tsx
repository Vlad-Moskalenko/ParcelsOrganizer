import { lazy } from 'react';

const LazyParcelsPage = lazy(() => import('./ParcelsPage'));

const ParcelsLazyPage = () => <LazyParcelsPage />;

export default ParcelsLazyPage;
