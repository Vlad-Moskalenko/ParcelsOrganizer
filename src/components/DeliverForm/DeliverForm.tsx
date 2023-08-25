import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import s from './DeliverFrom.module.css';
import { addDeliver, updateDeliver } from 'src/services/parcelsApi';
import { ParcelState } from 'src/entities/ParcelState';
import { useParcels } from 'src/hooks/useParcels';

const INITIAL_STATE = {
  _id: '',
  location: '',
  destination: '',
  date: '',
};

export const DeliverForm = (data: ParcelState) => {
  const [deliverData, setDeliverData] = useState(data || INITIAL_STATE);
  const navigate = useNavigate();
  const { refetch } = useParcels();

  const handleDeliverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeliverData(deliverData => ({ ...deliverData, [name]: value }));
  };

  const handleDeliverSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { location, destination, date, _id } = deliverData;

    if (deliverData._id) {
      updateDeliver({ id: _id, data: { location, destination, date } });
      refetch();
      return;
    }

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
