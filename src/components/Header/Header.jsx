import { useContext } from 'react';
import s from './Header.module.css';
import { authContext } from '../../context/ContextProvider';
export const Header = () => {
  const { user, logout } = useContext(authContext);
  return (
    <header className={s.header}>
      <div>HOOKS</div>
      <div>{user.email}</div>
      <button onClick={logout}>Exit</button>
    </header>
  );
};
