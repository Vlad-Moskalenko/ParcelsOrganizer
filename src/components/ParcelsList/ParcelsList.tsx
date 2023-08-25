import { useState } from 'react';
import { ParcelState } from 'src/entities/ParcelState';
import { removeParcel } from 'src/services/parcelsApi';
import { ParcelItem } from '..';

import s from './ParcelsList.module.css';

type ParcelsListProps = {
  list: ParcelState[];
};

export const ParcelsList = ({ list }: ParcelsListProps) => {
  const [parcels, setParcels] = useState(list);

  const handleDeleteClick = (id: string) => {
    removeParcel(id).then(() => {
      setParcels(parcels.filter(item => item._id !== id));
    });
  };

  return (
    <ul className={s.list}>
      {parcels.map((parcelData: ParcelState) => (
        <ParcelItem key={parcelData._id} data={parcelData} handleDeleteClick={handleDeleteClick} />
      ))}
    </ul>
  );
};
