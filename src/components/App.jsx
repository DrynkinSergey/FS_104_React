import { useContext } from 'react';
import { Header } from './Header/Header';
import { UseContextExample } from './UseContextExample/UseContextExample';
import { UseMemoExample } from './UseMemoExample/UseMemoExample';
import { UseRefExample } from './UseRefExample/UseRefExample';
import { authContext } from '../context/ContextProvider';
import { AuthForm } from './AuthForm/AuthForm';

export const App = () => {
  const auto = 'Audi';
  const { user } = useContext(authContext);
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
    </>
  );
};
