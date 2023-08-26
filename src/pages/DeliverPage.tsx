import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

import { DeliverForm } from 'src/components';
import { ROUTES } from 'src/routes/routes.const';

function DeliverPage() {
  return (
    <>
      <DeliverForm />
      <Link className="link" component={NavLink} to={ROUTES.CREATE_ORDER}>
        Create Order
      </Link>
    </>
  );
}

export default DeliverPage;
