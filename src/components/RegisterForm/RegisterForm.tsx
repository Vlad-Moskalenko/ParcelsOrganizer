import { useFormik } from 'formik';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { register } from 'src/redux/auth/authOperations';
import { RegisterSchema } from './registerSchema';

import s from './RegisterForm.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: RegisterSchema,

    onSubmit: (values, actions) => {
      dispatch(register(values)).then((resp: any) =>
        resp?.error ? toast.error(resp.error.message) : actions.resetForm()
      );
    },
  });

  const {
    values: { email, password, name },
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
        Name
        <input
          type="text"
          name="name"
          autoComplete="name"
          value={name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.name && touched.name && <p className="errorMsg">{errors.name}</p>}
      </label>
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
        Register
      </button>
    </form>
  );
};
