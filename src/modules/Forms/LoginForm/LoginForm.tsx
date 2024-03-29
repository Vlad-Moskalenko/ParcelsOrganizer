import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { ROUTES } from 'src/routes/routes.const';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { login } from 'src/redux/auth/authOperations';
import { loginSchema } from './loginSchema';

import s from './LoginForm.module.scss';
import { useAuth } from 'src/hooks/useAuth';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isRefreshing } = useAuth();

  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: loginSchema,

    onSubmit: values => {
      dispatch(login(values)).then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (resp: any) => !resp?.error && !isRefreshing && navigate(ROUTES.REQUESTS)
      );
    },
  });

  const {
    values: { email, password },
    errors,
    touched,
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
        error={!!errors.email && !!touched.email}
        helperText={!!errors.email && !!touched.email ? errors.email : ''}
        disabled={isRefreshing}
      />
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
        error={!!errors.password && !!touched.password}
        helperText={!!errors.password && !!touched.password ? errors.password : ''}
        disabled={isRefreshing}
      />
      <LoadingButton loading={isRefreshing} sx={{ mt: '20px' }} variant="contained" type="submit">
        Login
      </LoadingButton>
    </form>
  );
};
