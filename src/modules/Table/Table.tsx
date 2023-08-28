import { useEffect, useMemo, useState } from 'react';
import { TableContainer, Paper, Table as MuiTable } from '@mui/material';

import { useAuth } from 'src/hooks/useAuth';
import { useAppSelector } from 'src/hooks/useAppSelector';
import { selectParcels } from 'src/redux/parcels/parcelsSelectors';
import { getParcels } from 'src/redux/parcels/parcelsOperations';
import { sortParcelsByDate } from 'src/utils/sortParcelsByDate';
import { TableHead, TableBody, SortByDateBtn } from '.';
import { useAppDispatch } from 'src/hooks/useAppDispatch';

export const Table = () => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const [sortBy, setSortBy] = useState('default');
  const parcels = useAppSelector(selectParcels);
  const dispatch = useAppDispatch();

  const sortedParcels = useMemo(() => {
    return sortParcelsByDate(parcels, sortBy);
  }, [parcels, sortBy]);

  useEffect(() => {
    if (isLoggedIn && !isRefreshing) {
      dispatch(getParcels());
    }
  }, [isLoggedIn, isRefreshing, dispatch]);

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
