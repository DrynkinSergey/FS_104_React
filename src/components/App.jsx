import Footer from './Footer/Footer';
import Header from './Header/Header';
import Message from './Message/Message';
import '../index.css';
const App = () => {
  const message = 'Hello';
  const fruits = ['banana', 'apple', 'lemon', 'peach'];
  return (
    <>
      <Header />
      <h2 className='title'>Hello styles</h2>
      <Message author='Petro' message='Продам холодильник' />
      <Message author='Stepan' message={message} />
      <Message author='Olena' />
      <Message author='Ally' message='Привіт' />

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
