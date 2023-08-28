import { Outlet, useLocation, Link } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';
import { AsideBar } from 'src/modules';

function CreateParcelPage() {
  const { pathname } = useLocation();
  return (
    <>
      <AsideBar />
      <div className="wrapper">
        {pathname === ROUTES.CREATE_REQUEST ? (
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
        ) : (
          <Outlet />
        )}
      </div>
    </>
  );
}

export default CreateParcelPage;
