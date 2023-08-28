import * as Yup from 'yup';

export const orderSchema = Yup.object().shape({
  location: Yup.string().min(1, 'Too Short!').max(20, 'Too Long!').required('Required'),
  destination: Yup.string().min(1, 'Too Short!').max(20, 'Too Long!').required('Required'),
  date: Yup.date().min(new Date(), 'Date must be present or in the future').required('Required'),
  type: Yup.string().oneOf(['gadgets', 'drinks', 'clothes', 'medicines', 'other'],'Invalid type').required('Required'),
  description: Yup.string().min(1, 'Too Short!').max(200, 'Too Long!').required()
});