import { useMemo, useState } from 'react';
import { TableContainer, Paper, Table as MuiTable } from '@mui/material';

import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectParcels } from 'src/redux/parcels/parcelsSelectors';
import { sortParcelsByDate } from 'src/utils/sortParcelsByDate';
import { TableHead, TableBody, SortByDateBtn } from '.';

export const Table = () => {
  const [sortBy, setSortBy] = useState('default');
  const parcels = useAppSelector(selectParcels);
  const sortedParcels = useMemo(() => {
    return sortParcelsByDate(parcels, sortBy);
  }, [parcels, sortBy]);

  return parcels.length > 0 ? (
    <TableContainer component={Paper}>
      <MuiTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <SortByDateBtn setSortBy={setSortBy} />
        </TableHead>
        <TableBody list={sortedParcels} />
      </MuiTable>
    </TableContainer>
  ) : (
    <p className="text">No parcels</p>
  );
};
