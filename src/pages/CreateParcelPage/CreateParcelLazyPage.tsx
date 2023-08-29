import { lazy } from 'react';

const LazyCreateParcelPage = lazy(() => import('./CreateParcelPage'));

const CreateParcelLazyPage = () => <LazyCreateParcelPage />;

export default CreateParcelLazyPage;
