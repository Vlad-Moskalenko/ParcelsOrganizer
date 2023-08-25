import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './CreateDeliverFrom.module.css';
import { addDeliver } from 'src/services/parcelsApi';

const INITIAL_STATE = {
  location: '',
  destination: '',
  date: '',
};

export const CreateDeliverForm = () => {
  const [deliverData, setDeliverData] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleDeliverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliverData(deliverData => ({ ...deliverData, [name]: value }));
  };

  const handleDeliverSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addDeliver(deliverData).then(() => {
      setDeliverData(INITIAL_STATE);
      navigate('/requests');
    });
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
