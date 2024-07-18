import { Header } from './Header/Header';
import { UseContextExample } from './UseContextExample/UseContextExample';
import { UseMemoExample } from './UseMemoExample/UseMemoExample';
import { UseRefExample } from './UseRefExample/UseRefExample';

export const App = () => {
  return (
    <>
      <Header />
      <h1>HOOKS</h1>
      <UseMemoExample />
      <UseRefExample />
      <UseContextExample />
    </>
  );
};
