import { ParcelState } from 'src/entities/ParcelState';
import s from './ParcelItem.module.css';

type ParcelProps = {
  data: ParcelState;
  handleDeleteClick: (id: string) => void;
};

export const ParcelItem = ({ data, handleDeleteClick }: ParcelProps) => {
  const { location, destination, type, description, date } = data;
  return (
    <li className={s.item}>
      <span>From: {location}</span>
      <span>To: {destination}</span>
      <span>Type: {type}</span>
      <span>Description: {description}</span>
      <span>Date: {date}</span>

      <button type="button" onClick={() => handleDeleteClick(data._id)}>
        Delete
      </button>
      <button type="button" onClick={() => handleDeleteClick(data._id)}>
        Delete
      </button>
    </li>
  );
};
