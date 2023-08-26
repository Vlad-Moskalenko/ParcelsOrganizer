import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
      <label className={s.label}>
        From city
        <input type="text" name="location" value={location} onChange={handleDeliverChange} />
      </label>
      <label className={s.label}>
        To city
        <input type="text" name="destination" value={destination} onChange={handleDeliverChange} />
      </label>
      <label className={s.label}>
        Date
        <input type="date" name="date" value={date} onChange={handleDeliverChange} />
      </label>
      <button type="submit">Create Deliver</button>
    </form>
  );
};
