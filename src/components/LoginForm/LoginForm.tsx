import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { login } from 'src/redux/auth/authOperations';
import { LoginSchema } from './loginSchema';

import s from './LoginForm.module.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: LoginSchema,

    onSubmit: values => {
      dispatch(login(values));
      // .then((resp: any) =>
      //   resp?.error ? toast.error(resp.error.message) : actions.resetForm()
      // );
    },
  });

  const {
    values: { email, password },
    // errors,
    // touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Email"
        variant="standard"
        fullWidth
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* {errors.email && touched.email && <p className="errorMsg">{errors.email}</p>} */}
      <TextField
        label="Password"
        variant="standard"
        fullWidth
        type="password"
        name="password"
        autoComplete="password"
        value={password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {/* {errors.password && touched.password && <p className="errorMsg">{errors.password}</p>} */}
      <Button sx={{ mt: '20px' }} variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};
