import { TableCell, TableRow, TableHead as MuiTableHead } from '@mui/material';

type TableHeadProps = {
  children: React.ReactNode;
};

export const TableHead = ({ children }: TableHeadProps) => {
  return (
    <MuiTableHead>
      <TableRow>
        <TableCell align="left">City from</TableCell>
        <TableCell align="left">City to</TableCell>
        <TableCell align="left">Date</TableCell>
        <TableCell align="left">Type</TableCell>
        <TableCell align="left">Description</TableCell>
        <TableCell align="right">{children}</TableCell>
      </TableRow>
    </MuiTableHead>
  );
};
