import * as Yup from 'yup';

export const deliverSchema = Yup.object().shape({
  location: Yup.string()
    .matches(/^[A-Za-z\s-]+$/, 'Only letters are allowed')
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  destination: Yup.string()
    .matches(/^[A-Za-z\s-]+$/, 'Only letters are allowed')
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  date: Yup.date()
    .min(new Date(new Date().getTime() - 24*60*60*1000), 'Date must be in present or in the future')
    .max(new Date(new Date().getTime() + 365*24*60*60*1000), 'Date should not be older than 1 year from current date'),
});