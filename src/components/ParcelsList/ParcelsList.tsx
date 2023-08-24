import { ParcelState } from 'src/entities/ParcelState';
import { ParcelItem } from '..';

import s from './ParcelsList.module.css';

type ParcelsListProps = {
  list: ParcelState[];
};

export const ParcelsList = ({ list }: ParcelsListProps) => {
  return (
    <ul className={s.list}>
      {list.map((itemData: ParcelState) => (
        <ParcelItem key={itemData._id} data={itemData} />
      ))}
    </ul>
  );
};
