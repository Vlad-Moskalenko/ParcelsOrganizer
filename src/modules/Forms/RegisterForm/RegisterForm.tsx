import { useFormik } from 'formik';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LoadingButton } from '@mui/lab';

import { ROUTES } from 'src/routes/routes.const';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { useAuth } from 'src/hooks/useAuth';
import { register } from 'src/redux/auth/authOperations';
import { registerSchema } from './registerSchema';

import s from './RegisterForm.module.scss';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isRefreshing } = useAuth();

  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: registerSchema,

    onSubmit: values => {
      dispatch(register(values)).then(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (resp: any) => !resp?.error && navigate(ROUTES.REQUESTS)
      );
    },
  });

  const {
    values: { email, password, name },
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form className={s.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        label="Name"
        variant="standard"
        fullWidth
        type="text"
        name="name"
        autoComplete="name"
        value={name}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.name && !!touched.name}
        helperText={!!errors.name && !!touched.name ? errors.name : ''}
        disabled={isRefreshing}
      >
        {errors.name && touched.name && (
          <p style={{ color: 'red', marginTop: '4px' }}>{errors.name}</p>
        )}
      </TextField>
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
        Register
      </LoadingButton>
    </form>
  );
};
