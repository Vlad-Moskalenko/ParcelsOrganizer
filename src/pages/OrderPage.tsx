import { Link } from 'react-router-dom';

import { CreateOrderForm } from 'src/components';
import { ROUTES } from 'src/routes/routes.const';

function OrderPage() {
  return (
    <>
      <CreateOrderForm />
      <Link to={ROUTES.CREATE_DELIVER}>Create Deliver</Link>
    </>
  );
}

export default OrderPage;
