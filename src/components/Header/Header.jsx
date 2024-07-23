import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(s.link, isActive && s.active);
};
export const Header = () => {
  return (
    <header className={s.header}>
      <div>Routing</div>
      <nav>
        <ul className={s.nav}>
          <li>
            <NavLink className={buildLinkClass} to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={buildLinkClass} to='/about'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
