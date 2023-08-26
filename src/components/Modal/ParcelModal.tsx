import { createPortal } from 'react-dom';
import { IconButton, Modal } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { ParcelState } from 'src/entities/ParcelState';
import { DeliverForm, OrderForm } from '..';

import s from './ParcelModal.module.scss';

type ModalProps = {
  data: ParcelState;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

export const ParcelModal = ({ isOpen, setIsOpen, data }: ModalProps) => {
  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <Modal open={isOpen} onClose={() => setIsOpen(false)}>
      <div className={s.modal}>
        <IconButton className={s.closeBtn} aria-label="close" onClick={() => setIsOpen(false)}>
          <CloseIcon />
        </IconButton>
        {data.parcelType === 'order' ? <OrderForm /> : <DeliverForm />}
      </div>
    </Modal>,
    modalRoot as HTMLDivElement
  );
};
