import { Link } from 'react-router-dom';
import s from './Header.module.css';
export const Header = () => {
  return (
    <header className={s.header}>
      <div>Routing</div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
