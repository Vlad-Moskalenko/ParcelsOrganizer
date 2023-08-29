import { Link } from 'react-router-dom';

import { RegisterForm } from 'src/modules';
import { ROUTES } from 'src/routes/routes.const';

function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <p className="text">
        Already have an account?{' '}
        <Link className="link" to={ROUTES.LOGIN}>
          <b>Login</b>
        </Link>
      </p>
    </>
  );
}

export default RegisterPage;
