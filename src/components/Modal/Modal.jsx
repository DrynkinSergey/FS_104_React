import { useEffect } from 'react';
import s from './Modal.module.css';
const Modal = ({ children, onClose, title = 'Default modal' }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      console.log(e.key);
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    console.log('Модальне вікно відмалювалось!');
    const intervalID = setInterval(() => {
      console.log(new Date().toLocaleTimeString());
    }, 1000);
    const timeoutID = setTimeout(() => {
      console.log('Badabum!!!🔥');
    }, 3000);

    return () => {
      console.log('Модалка закрилась!');
      document.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalID);
      clearTimeout(timeoutID);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className={s.wrapper} onClick={handleBackdropClick}>
      <div className={s.content}>
        <>
          <h1>{title}</h1>
          <hr />
        </>
        <button onClick={onClose} className={s.closeBtn}>
          close
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
