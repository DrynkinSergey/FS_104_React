import Footer from './Footer/Footer';
import Header from './Header/Header';
import Profile from './Profile/Profile';
import profileData from '../assets/user.json';
import s from './App.module.css';
import clsx from 'clsx';
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
    </>
  );
};

export default App;
