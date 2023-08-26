import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ParcelState } from 'src/entities/ParcelState';
import s from './OrderFrom.module.css';
import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { addParcel, updateParcel } from 'src/redux/parcels/parcelsSlice';

const INITIAL_STATE = {
  _id: '',
  location: '',
  destination: '',
  type: 'other',
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
      <label className={s.label}>
        From city
        <input type="text" name="location" value={location} onChange={handleOrderChange} />
      </label>
      <label className={s.label}>
        To city
        <input type="text" name="destination" value={destination} onChange={handleOrderChange} />
      </label>
      <label className={s.label}>
        Type of parcel
        <select name="type" value={type} onChange={handleOrderChange}>
          <option value="gadgets">Gadgets</option>
          <option value="drinks">Drinks</option>
          <option value="clothes">Clothes</option>
          <option value="medicines">Medicines</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className={s.label}>
        Date
        <input type="date" name="date" value={date} onChange={handleOrderChange} />
      </label>
      <label className={s.label}>
        Parcel description
        <input type="text" name="description" value={description} onChange={handleOrderChange} />
      </label>
      <button type="submit">Create order</button>
    </form>
  );
};
