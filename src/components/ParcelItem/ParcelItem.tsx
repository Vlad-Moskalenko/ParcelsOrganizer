import { useState } from 'react';

import { ParcelState } from 'src/entities/ParcelState';
import s from './ParcelItem.module.css';
import { Modal } from '..';

type ParcelProps = {
  data: ParcelState;
  handleDeleteClick: (id: string) => void;
};

export const ParcelItem = ({ data, handleDeleteClick }: ParcelProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const { location, destination, type, description, date, _id } = data;
  return (
    <>
      <li className={s.item}>
        <span>From: {location}</span>
        <span>To: {destination}</span>
        <span>Type: {type}</span>
        <span>Description: {description}</span>
        <span>Date: {date}</span>

        <button type="button" onClick={handleOpenModal}>
          Edit
        </button>
        <button type="button" onClick={() => handleDeleteClick(_id)}>
          Delete
        </button>
      </li>
      {isOpen && <Modal setIsOpen={setIsOpen} data={data} />}
    </>
  );
};
