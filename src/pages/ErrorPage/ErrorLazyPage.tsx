import { lazy } from 'react';

const LazyErrorPage = lazy(() => import('./ErrorPage'));

const ErrorLazyPage = () => <LazyErrorPage />;

export default ErrorLazyPage;
