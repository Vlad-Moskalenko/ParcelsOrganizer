import { Link } from 'react-router-dom';

import { ROUTES } from 'src/routes/routes.const';

function CreateParcelPage() {
  return (
    <ul>
      <li>
        <Link to={ROUTES.CREATE_ORDER}>Create Order</Link>
      </li>
      <li>
        <Link to={ROUTES.CREATE_DELIVER}>Create Deliver</Link>
      </li>
    </ul>
  );
}

export default CreateParcelPage;
