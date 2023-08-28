import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import { ParcelState } from 'src/entities/ParcelState';
import { useAuth } from 'src/hooks/useAuth';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { createParcel, editParcel } from 'src/redux/parcels/parcelsOperations';
import { addParcel, updateParcel } from 'src/redux/parcels/parcelsSlice';
import { deliverSchema } from './deliverSchema';
import { ROUTES } from 'src/routes/routes.const';

import s from './DeliverFrom.module.scss';

const INITIAL_STATE = {
  location: '',
  destination: '',
  date: '',
};

type DeliverFormProps = {
  data?: ParcelState;
};

export const DeliverForm = ({ data }: DeliverFormProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, isRefreshing } = useAuth();

  const formik = useFormik({
    initialValues: data || INITIAL_STATE,

    validationSchema: deliverSchema,

    onSubmit: values => {
      if (isLoggedIn && !isRefreshing && !data) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch(createParcel({ ...values, parcelType: 'deliver' })).then((resp: any) => {
          !resp?.error && navigate(ROUTES.REQUESTS);
        });
        return;
      }

      if (data) {
        isLoggedIn ? dispatch(editParcel({ ...values })) : dispatch(updateParcel({ ...values }));
      } else {
        dispatch(addParcel({ ...values, parcelType: 'deliver', createdAt: Date.now() }));
        navigate(ROUTES.REQUESTS);
      }
    },
  });

  const {
    values: { location, destination, date },
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
      <Button sx={{ mt: '40px' }} variant="contained" type="submit">
        {data ? 'Submit changes' : 'Create deliver'}
      </Button>
    </form>
  );
};
