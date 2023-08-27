import { useState } from 'react';
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableSortLabel,
} from '@mui/material';

import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectParcels } from 'src/redux/parcels/parcelsSelectors';
import { ParcelsList } from 'src/components';
import { sortDataByDate } from 'src/utils/sortDataByDate';

function ParcelsPage() {
  const [parcels, setParcels] = useState(useAppSelector(selectParcels));
  const [isAsc, setIsAsc] = useState(true);

  const sortByDate = () => {
    setIsAsc(prevIsAsc => !prevIsAsc);
    setParcels(sortDataByDate(parcels, isAsc));
  };

  return parcels.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">City from</TableCell>
            <TableCell align="left">City to</TableCell>
            <TableCell onClick={sortByDate} align="left">
              <TableSortLabel direction={isAsc ? 'asc' : 'desc'}>Date</TableSortLabel>
            </TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <ParcelsList list={parcels} />
      </Table>
    </TableContainer>
  ) : (
    <p>No parcels</p>
  );
}

export default ParcelsPage;
