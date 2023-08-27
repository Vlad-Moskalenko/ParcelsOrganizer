import { useFormik } from 'formik';
import { Button, TextField } from '@mui/material';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { register } from 'src/redux/auth/authOperations';
import { RegisterSchema } from './registerSchema';

import s from './RegisterForm.module.scss';

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

    onSubmit: values => {
      dispatch(register(values));
      // .then((resp: any) =>
      //   resp?.error ? toast.error(resp.error.message) : actions.resetForm()
      // );
    },
  });

  const {
    values: { email, password, name },
    // errors,
    // touched,
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
      />
      {/* {errors.name && touched.name && <p className="errorMsg">{errors.name}</p>} */}
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
        Register
      </Button>
    </form>
  );
};
