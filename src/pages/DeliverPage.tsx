import { Link } from 'react-router-dom';

import { CreateDeliverForm } from 'src/components';
import { ROUTES } from 'src/routes/routes.const';

function DeliverPage() {
  return (
    <>
      <CreateDeliverForm />
      <Link to={ROUTES.CREATE_ORDER}>Create Order</Link>
    </>
  );
}

export default DeliverPage;
