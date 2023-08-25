import { Link } from 'react-router-dom';

import { DeliverForm } from 'src/components';
import { ROUTES } from 'src/routes/routes.const';

function DeliverPage() {
  return (
    <>
      <DeliverForm />
      <Link to={ROUTES.CREATE_ORDER}>Create Order</Link>
    </>
  );
}

export default DeliverPage;
