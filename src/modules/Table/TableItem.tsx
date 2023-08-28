import { useState } from 'react';
import { TableRow, TableCell, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useAppDispatch } from 'src/hooks/useAppDispatch';
import { removeParcel } from 'src/redux/parcels/parcelsSlice';
import { ParcelState } from 'src/entities/ParcelState';
import { ParcelModal } from '..';

type TableItemProps = {
  data: ParcelState;
};

export const TableItem = ({ data }: TableItemProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useAppDispatch();

  const handleDeleteClick = () => {
    dispatch(removeParcel(data._id));
  };

  const { location, destination, type, description, date, parcelType } = data;

  return (
    <>
      <TableRow
        sx={{
          '&:last-child td, &:last-child th': { border: 0 },
          backgroundColor: parcelType === 'deliver' ? '#00000020' : 'initial',
        }}
      >
        <TableCell align="left">{location}</TableCell>
        <TableCell align="left">{destination}</TableCell>
        <TableCell align="left">{date}</TableCell>
        <TableCell align="left">{type || '-'}</TableCell>
        <TableCell align="left">{description || '-'}</TableCell>
        <TableCell align="right">
          <IconButton type="button" onClick={() => setIsOpen(true)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDeleteClick}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <ParcelModal isOpen={isOpen} setIsOpen={setIsOpen} data={data} />
    </>
  );
};
