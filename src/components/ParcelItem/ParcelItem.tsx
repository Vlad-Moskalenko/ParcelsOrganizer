import { useState } from 'react';

import { ParcelState } from 'src/entities/ParcelState';
import { Modal } from '..';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { removeParcel } from 'src/redux/parcels/parcelsSlice';
import s from './ParcelItem.module.css';

type ParcelProps = {
  data: ParcelState;
};

export const ParcelItem = ({ data }: ParcelProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(removeParcel(data._id));
  };

  const { location, destination, type, description, date } = data;

  return (
    <>
      <li className={s.item}>
        <span>From: {location}</span>
        <span>To: {destination}</span>
        <span>Type: {type}</span>
        <span>Description: {description}</span>
        <span>Date: {date}</span>

        <button type="button" onClick={() => setIsOpen(true)}>
          Edit
        </button>
        <button type="button" onClick={handleDeleteClick}>
          Delete
        </button>
      </li>
      {isOpen && <Modal setIsOpen={setIsOpen} data={data} />}
    </>
  );
};
