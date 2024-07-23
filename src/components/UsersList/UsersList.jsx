import { Link } from 'react-router-dom';
import s from './UsersList.module.css';
const UsersList = ({ users = [] }) => {
  return (
    <div>
      <h2>Users</h2>

      <ul className={s.list}>
        {users.map(user => (
          <li key={user.id}>
            <Link to={user.id.toString()}>
              {user.firstName} {user.lastName}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default UsersList;
