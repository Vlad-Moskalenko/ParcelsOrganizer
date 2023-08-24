import { NavLink } from 'react-router-dom';

import { RegisterForm } from 'src/components';

function RegisterPage() {
  return (
    <>
      <RegisterForm />
      <p className="authMsg">
        Already have an account?
        <NavLink to="/login">
          <b>Login</b>
        </NavLink>
      </p>
    </>
  );
}

export default RegisterPage;
