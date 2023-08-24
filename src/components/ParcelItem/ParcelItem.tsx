import { ParcelState } from 'src/entities/ParcelState';
import s from './ParcelItem.module.css';

type ParcelProps = {
  data: ParcelState;
};

export const ParcelItem = ({ data }: ParcelProps) => {
  const { location, destination, type, description, date } = data;
  return (
    <li className={s.item}>
      <span>From: {location}</span>
      <span>To: {destination}</span>
      <span>Type: {type}</span>
      <span>Description: {description}</span>
      <span>Date: {date}</span>
    </li>
  );
};
