import { TableContainer, Paper, Table, TableHead, TableRow, TableCell } from '@mui/material';

import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectParcels } from 'src/redux/parcels/parcelsSelectors';
import { ParcelsList } from 'src/components';

function ParcelsPage() {
  const parcels = useAppSelector(selectParcels);

  return parcels.length > 0 ? (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">City from</TableCell>
            <TableCell align="left">City to</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="right"></TableCell>
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
