import { Link } from 'react-router-dom';
import { LoginForm } from 'src/components';

function LoginPage() {
  return (
    <>
      <LoginForm />
      <p className="authMsg">
        Don’t have an account?
        <Link className="link" to="/register">
          <b>Join to us</b>
        </Link>
      </p>
    </>
  );
}

export default LoginPage;
