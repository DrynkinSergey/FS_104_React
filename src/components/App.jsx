import { useState } from 'react';
import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import Modal from './Modal/Modal';
import { TodoList } from './TodoList/TodoList';
export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <>
      <button onClick={handleOpenModal}>Open modal</button>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam temporibus odit fugit laudantium
          perferendis reprehenderit deleniti vitae sed ab! Sed nam at dolore a magni architecto quos vitae natus velit?
        </Modal>
      )}

      {/* <TodoList /> */}
      {/* <ColorPicker /> */}
    </>
  );
};
