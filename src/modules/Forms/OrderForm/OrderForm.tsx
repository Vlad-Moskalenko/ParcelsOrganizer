import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, MenuItem, Select, InputLabel, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

import { ParcelState } from 'src/entities/ParcelState';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addParcel, updateParcel } from 'src/redux/parcels/parcelsSlice';

import s from './OrderFrom.module.scss';
import { orderSchema } from './orderSchema';

const INITIAL_STATE = {
  _id: '',
  location: '',
  destination: '',
  type: '',
  date: '',
  description: '',
};

type OrderFormProps = {
  data?: ParcelState;
};

export const OrderForm = ({ data }: OrderFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: INITIAL_STATE,

    validationSchema: orderSchema,

    onSubmit: values => {
      if (data) {
        dispatch(updateParcel(values));
        return;
      }

      dispatch(addParcel({ ...values, parcelType: 'order', createdAt: Date.now() }));
      navigate('/requests');
    },
  });

  const {
    values: { location, destination, date, type, description },
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
  } = formik;

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <TextField
        label="From city"
        variant="standard"
        fullWidth
        name="location"
        value={location}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.location && !!touched.location}
        helperText={!!errors.location && !!touched.location ? errors.location : ''}
      />

      <TextField
        label="City to"
        variant="standard"
        fullWidth
        type="text"
        name="destination"
        value={destination}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.destination && !!touched.destination}
        helperText={!!errors.destination && !!touched.destination ? errors.destination : ''}
      />
      <TextField
        label="Date"
        variant="standard"
        fullWidth
        type="date"
        name="date"
        value={date}
        onChange={handleChange}
        onBlur={handleBlur}
        error={!!errors.date && !!touched.date}
        helperText={!!errors.date && !!touched.date ? errors.date : ''}
      />
      <FormControl variant="standard" fullWidth>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          label="type"
          name="type"
          value={type}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.type && !!touched.type}
        >
          <MenuItem value="gadgets">Gadgets</MenuItem>
          <MenuItem value="drinks">Drinks</MenuItem>
          <MenuItem value="clothes">Clothes</MenuItem>
          <MenuItem value="medicines">Medicines</MenuItem>
          <MenuItem value="other">Other</MenuItem>
        </Select>
      </FormControl>
      <Textarea
        sx={{ mt: '20px' }}
        minRows={5}
        variant="outlined"
        name="description"
        color="neutral"
        placeholder="Type some description..."
        value={description}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <Button sx={{ mt: '20px' }} variant="contained" type="submit">
        {data ? 'Submit changes' : 'Create order'}
      </Button>
    </form>
  );
};
