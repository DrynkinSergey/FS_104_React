import Footer from './Footer/Footer';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import profileData from '../assets/user.json';
import s from './App.module.css';
import clsx from 'clsx';
import Modal from './Modal/Modal';
const App = () => {
  const fruits = ['banana', 'apple', 'lemon', 'peach'];
  return (
    <>
      <Header />
      <h2 className='title'>Hello styles</h2>
      <Profile user={profileData} />
      <ul>
        {fruits.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <Footer />
      <div className={s.wrapper}>
        <div className={clsx(s.box)}></div>
        <div className={clsx(s.red)}></div>
        <div className={clsx(s.black)}></div>
        <div className={clsx(s.box)}></div>
      </div>
      <Modal>
        <p>Hello</p>
      </Modal>
      <Modal>
        <p>Продам холодильник</p>
        <img src='https://whirlpool-store.com.ua/10451-tm_large_default/kholodilnik-whirlpool-w7x-82o-ox-h.jpg' />
      </Modal>
    </>
  );
};

export default App;
