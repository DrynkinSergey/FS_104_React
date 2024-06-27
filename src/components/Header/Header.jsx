import s from './Header.module.css';
const Header = () => {
  return (
    <header className={s.header}>
      <div className={`${s.logo} global`}>Logo</div>
      <div className={s.title}>Holla</div>
    </header>
  );
};

export default Header;
