import { Link } from 'react-router-dom';

import { OrderForm } from 'src/components';
import { ROUTES } from 'src/routes/routes.const';

function OrderPage() {
  return (
    <>
      <OrderForm />
      <Link to={ROUTES.CREATE_DELIVER}>Create Deliver</Link>
    </>
  );
}

export default OrderPage;
