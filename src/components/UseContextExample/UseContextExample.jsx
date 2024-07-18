import { useState } from 'react';
import { A } from './A';
import Modal from '../Modal/Modal';
import { useToggle } from '../../hooks/useToggle';

export const UseContextExample = ({ auto }) => {
  const { isOpen, close, open } = useToggle();

  return (
    <div>
      <button onClick={open}>Open modal</button>
      <A auto={auto} />
      {isOpen && (
        <Modal onClose={close}>
          <h2>Продам диван!</h2>
        </Modal>
      )}
    </div>
  );
};
