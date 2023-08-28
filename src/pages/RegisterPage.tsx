import { Link } from 'react-router-dom';

import { RegisterForm } from 'src/modules';

function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <p className="text">
        Already have an account?
        <Link className="link" to="/login">
          <b>Login</b>
        </Link>
      </p>
    </>
  );
}

export default RegisterPage;
