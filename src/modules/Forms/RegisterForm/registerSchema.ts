import * as Yup from 'yup';

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().min(1, 'Too Short!').max(12, 'Too Long!').required('Required'),
  password: Yup.string().min(6, 'Too Short!').max(12, 'Too Long!').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
});