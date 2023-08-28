import { TableBody as MuiTableBody } from '@mui/material';
import { ParcelState } from 'src/entities/ParcelState';

import { TableItem } from './TableItem';

type TableBodyProps = {
  list: ParcelState[];
};

export const TableBody = ({ list }: TableBodyProps) => {
  return (
    <MuiTableBody>
      {list.map((parcelData: ParcelState) => (
        <TableItem key={parcelData._id} data={parcelData} />
      ))}
    </MuiTableBody>
  );
};
