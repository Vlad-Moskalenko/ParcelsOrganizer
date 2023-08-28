import { Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';

type SortByDateBtnProps = {
  setSortBy: (sort: string) => void;
};

export const SortByDateBtn = ({ setSortBy }: SortByDateBtnProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const setOrderSort = (order: string) => {
    setSortBy(order);
    handleClose();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls={open ? 'sort-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Sort By
      </Button>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuItem onClick={() => setOrderSort('asc')}>Ascending</MenuItem>
        <MenuItem onClick={() => setOrderSort('desc')}>Descending</MenuItem>
        <MenuItem onClick={() => setOrderSort('default')}>Default</MenuItem>
      </Menu>
    </>
  );
};
