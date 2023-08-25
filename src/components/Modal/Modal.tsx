import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { OrderForm } from '..';
import s from './Modal.module.css';
import { ParcelState } from 'src/entities/ParcelState';

type ModalProps = {
  data: ParcelState;
  setIsOpen: (isOpen: boolean) => void;
};

export const Modal = ({ setIsOpen, data }: ModalProps) => {
  useEffect(() => {
    const closeModalKeyboard = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', closeModalKeyboard);

    return () => {
      document.removeEventListener('keydown', closeModalKeyboard);
    };
  }, [setIsOpen]);

  const modalRoot = document.querySelector('#modal-root');

  return createPortal(
    <div onClick={() => setIsOpen(false)} className={s.backdrop}>
      <button onClick={() => setIsOpen(false)}>Close</button>
      <div className={s.modal}>
        <OrderForm data={data} />
      </div>
    </div>,
    modalRoot as HTMLDivElement
  );
};
