import { Link } from 'react-router-dom';

import { LoginForm } from 'src/modules';
import { ROUTES } from 'src/routes/routes.const';

function LoginPage() {
  return (
    <>
      <LoginForm />
      <p className="text">
        Don’t have an account?{' '}
        <Link className="link" to={ROUTES.REGISTER}>
          <b>Join to us</b>
        </Link>
      </p>
    </>
  );
}

export default LoginPage;
