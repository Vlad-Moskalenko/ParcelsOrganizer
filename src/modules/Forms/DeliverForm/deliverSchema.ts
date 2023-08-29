import * as Yup from 'yup';

export const deliverSchema = Yup.object().shape({
  location: Yup.string().min(1, 'Too Short!').max(20, 'Too Long!').required('Required'),
  destination: Yup.string().min(1, 'Too Short!').max(20, 'Too Long!').required('Required'),
  date: Yup.date().min(new Date(new Date().getTime() - 24*60*60*1000), 'Date must be present or in the future'),
});