import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  password: Yup.string().min(6, 'Too Short!').max(12, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});