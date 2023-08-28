import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';
import { toast } from 'react-toastify';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { login } from 'src/redux/auth/authOperations';
import { loginSchema } from './loginSchema';

import s from './LoginForm.module.scss';

const INITIAL_STATE = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: loginSchema,

    onSubmit: values => {
      dispatch(login(values)).then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (resp: any) => resp?.error && toast.error(resp.payload.response.data.message)
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
      />
      <Button sx={{ mt: '20px' }} variant="contained" type="submit">
        Login
      </Button>
    </form>
  );
};
