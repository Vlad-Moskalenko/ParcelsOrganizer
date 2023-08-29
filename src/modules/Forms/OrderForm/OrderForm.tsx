import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, MenuItem, Select, InputLabel } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import Textarea from '@mui/joy/Textarea';

import { useAuth } from 'src/hooks/useAuth';
import { ParcelState } from 'src/entities/ParcelState';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addParcel, updateParcel } from 'src/redux/parcels/parcelsSlice';
import { createParcel, editParcel } from 'src/redux/parcels/parcelsOperations';
import { orderSchema } from './orderSchema';
import { ROUTES } from 'src/routes/routes.const';

import s from './OrderFrom.module.scss';
import { useParcels } from 'src/hooks/useParcels';

const INITIAL_STATE: Omit<ParcelState, '_id' | 'createdAt' | 'parcelType'> = {
  location: '',
  destination: '',
  type: 'other',
  date: '',
  description: '',
};

type OrderFormProps = {
  data?: ParcelState;
  setIsOpen?: (isOpen: boolean) => void;
};

export const OrderForm = ({ data, setIsOpen }: OrderFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, isRefreshing } = useAuth();
  const { isLoading } = useParcels();

  const formik = useFormik({
    initialValues: data || INITIAL_STATE,

    validationSchema: orderSchema,

    onSubmit: values => {
      if (data && setIsOpen) {
        if (isLoggedIn) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dispatch(editParcel({ ...values })).then((resp: any) => {
            !resp?.error && setIsOpen(false);
          });
          return;
        }

        dispatch(updateParcel({ ...values }));
        setIsOpen(false);
      } else {
        if (isLoggedIn && !isRefreshing) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          dispatch(createParcel({ ...values, parcelType: 'order' })).then((resp: any) => {
            !resp?.error && navigate(ROUTES.REQUESTS);
          });
          return;
        }
        dispatch(addParcel({ ...values, parcelType: 'order', createdAt: Date.now() }));
        navigate(ROUTES.REQUESTS);
      }
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
        InputLabelProps={{
          shrink: true,
        }}
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
      <LoadingButton loading={isLoading} sx={{ mt: '20px' }} variant="contained" type="submit">
        {data ? 'Submit changes' : 'Create order'}
      </LoadingButton>
    </form>
  );
};
