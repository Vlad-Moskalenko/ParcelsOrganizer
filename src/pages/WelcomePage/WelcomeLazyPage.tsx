import { lazy } from 'react';

const LazyWelcomePage = lazy(() => import('./WelcomePage'));

const WelcomeLazyPage = () => <LazyWelcomePage />;

export default WelcomeLazyPage;
