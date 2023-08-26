import { ParcelState } from 'src/entities/ParcelState';
import { ParcelItem } from '..';

import s from './ParcelsList.module.css';

type ParcelsListProps = {
  list: ParcelState[];
};

export const ParcelsList = ({ list }: ParcelsListProps) => {
  return (
    <ul className={s.list}>
      {list.map((parcelData: ParcelState) => (
        <ParcelItem key={parcelData._id} data={parcelData} />
      ))}
    </ul>
  );
};
