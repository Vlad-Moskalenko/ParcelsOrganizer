import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, FormControl, MenuItem, Select, InputLabel, Button } from '@mui/material';
import Textarea from '@mui/joy/Textarea';

import { ParcelState } from 'src/entities/ParcelState';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addParcel, updateParcel } from 'src/redux/parcels/parcelsSlice';

import s from './OrderFrom.module.scss';

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
  const [orderData, setOrderData] = useState(data || INITIAL_STATE);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleOrderChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrderData(orderData => ({ ...orderData, [name]: value }));
  };

  const handleOrderSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (data) {
      dispatch(updateParcel(orderData));
      return;
    } else {
      dispatch(addParcel({ ...orderData, parcelType: 'order' }));
      setOrderData(INITIAL_STATE);
      navigate('/requests');
    }
  };

  const { location, destination, type, date, description } = orderData;

  return (
    <form className={s.form} onSubmit={handleOrderSubmit}>
      <TextField
        label="From city"
        variant="standard"
        fullWidth
        name="location"
        value={location}
        onChange={handleOrderChange}
      />

      <TextField
        label="City to"
        variant="standard"
        fullWidth
        type="text"
        name="destination"
        value={destination}
        onChange={handleOrderChange}
      />
      <TextField
        label="Date"
        variant="standard"
        fullWidth
        type="date"
        name="date"
        value={date}
        onChange={handleOrderChange}
      />
      <FormControl variant="standard" fullWidth>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="type"
          label="type"
          name="type"
          value={type}
          onChange={handleOrderChange}
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
        type="textarea"
        variant="outlined"
        name="description"
        color="neutral"
        value={description}
        placeholder="Type some description..."
        onChange={handleOrderChange}
      />
      <Button sx={{ mt: '20px' }} variant="contained" type="submit">
        {data ? 'Submit changes' : 'Create order'}
      </Button>
    </form>
  );
};
