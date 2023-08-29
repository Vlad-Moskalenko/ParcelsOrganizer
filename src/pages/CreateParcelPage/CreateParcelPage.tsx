import { Outlet, Link } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';

function CreateParcelPage() {
  return (
    <>
      <p className="text">
        Choose action{' '}
        <Link className="link" to={ROUTES.CREATE_ORDER}>
          CREATE ORDER
        </Link>{' '}
        or{' '}
        <Link className="link" to={ROUTES.CREATE_DELIVER}>
          CREATE DELIVER
        </Link>
      </p>
      <Outlet />
    </>
  );
}

export default CreateParcelPage;
