import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { login } from 'src/redux/auth/authOperations';
import { LoginSchema } from './loginSchema';

import s from './LoginForm.module.css';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: LoginSchema,

    onSubmit: (values, actions) => {
      dispatch(login(values)).then((resp: any) =>
        resp?.error ? toast.error(resp.error.message) : actions.resetForm()
      );
    },
  });

  const {
    values: { email, password },
    isSubmitting,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <label className={s.label}>
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.email && touched.email && <p className="errorMsg">{errors.email}</p>}
      </label>
      <label className={s.label}>
        Password
        <input
          type="password"
          name="password"
          autoComplete="password"
          value={password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && <p className="errorMsg">{errors.password}</p>}
      </label>
      <button className={s.authBtn} type="submit">
        Login
      </button>
    </form>
  );
};
