import { NavLink } from 'react-router-dom';
import { Link } from '@mui/material';

import { OrderForm } from 'src/components';
import { ROUTES } from 'src/routes/routes.const';

function OrderPage() {
  return (
    <>
      <OrderForm />
      <Link className="link" component={NavLink} to={ROUTES.CREATE_DELIVER}>
        Create Deliver
      </Link>
    </>
  );
}

export default OrderPage;
