import Footer from './Footer/Footer';
import Header from './Header/Header';
import Message from './Message/Message';

const App = () => {
  const message = 'Hello';
  const isOnline = false;
  const age = 88;
  const fruits = ['banana', 'apple', 'lemon', 'peach'];
  return (
    <>
      <Header />
      <Message author='Petro' message='Продам холодильник' />
      <Message author='Stepan' message={message} />
      <Message author='Olena' />
      <Message author='Ally' message='Привіт' />

      {isOnline && <h1>Welcome back</h1>}
      {!isOnline && <h1>Please Login</h1>}

      {age > 18 ? <h2>Ого який дорослий!!</h2> : <h2>Тобі ще треба підрости</h2>}
      <ul>
        {fruits.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Footer />
    </>
  );
};

export default App;
