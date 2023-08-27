import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

import { ParcelState } from 'src/entities/ParcelState';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addParcel, updateParcel } from 'src/redux/parcels/parcelsSlice';

import s from './DeliverFrom.module.css';

const INITIAL_STATE = {
  _id: '',
  location: '',
  destination: '',
  date: '',
};

type DeliverFormProps = {
  data?: ParcelState;
};

export const DeliverForm = ({ data }: DeliverFormProps) => {
  const [deliverData, setDeliverData] = useState(data || INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleDeliverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliverData(deliverData => ({ ...deliverData, [name]: value }));
  };

  const handleDeliverSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (data) {
      dispatch(updateParcel(deliverData));
      return;
    }

    dispatch(addParcel({ ...deliverData, parcelType: 'deliver' }));
    setDeliverData(INITIAL_STATE);
    navigate('/requests');
  };

  const { location, destination, date } = deliverData;

  return (
    <form className={s.form} onSubmit={handleDeliverSubmit}>
      <TextField
        label="From city"
        variant="standard"
        fullWidth
        name="location"
        value={location}
        onChange={handleDeliverChange}
      />

      <TextField
        label="City to"
        variant="standard"
        fullWidth
        type="text"
        name="destination"
        value={destination}
        onChange={handleDeliverChange}
      />
      <TextField
        label="Date"
        variant="standard"
        fullWidth
        type="date"
        name="date"
        value={date}
        onChange={handleDeliverChange}
      />
      <Button sx={{ mt: '40px' }} variant="contained" type="submit">
        {data ? 'Submit changes' : 'Create deliver'}
      </Button>
    </form>
  );
};
