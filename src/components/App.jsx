import { useContext, useState } from 'react';
import { Header } from './Header/Header';
import { UseContextExample } from './UseContextExample/UseContextExample';
import { UseMemoExample } from './UseMemoExample/UseMemoExample';
import { UseRefExample } from './UseRefExample/UseRefExample';
import { authContext } from '../context/ContextProvider';
import { AuthForm } from './AuthForm/AuthForm';
import Modal from './Modal/Modal';
import { useToggle } from '../hooks/useToggle';

export const App = () => {
  const auto = 'Audi';
  const { user } = useContext(authContext);

  const { isOpen, close, open } = useToggle();

  if (!user) {
    return <AuthForm />;
  }
  return (
    <>
      <Header />
      <h1>HOOKS</h1>
      {/* <UseMemoExample /> */}
      {/* <UseRefExample /> */}
      <UseContextExample auto={auto} />
      <button onClick={open}>SHOW MODAL</button>
      {isOpen && (
        <Modal onClose={close}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero doloremque blanditiis incidunt vel? Consequatur
          fuga obcaecati, sint et, voluptas repellendus omnis architecto asperiores saepe id repellat eligendi, aliquid
          amet neque.
        </Modal>
      )}
    </>
  );
};
