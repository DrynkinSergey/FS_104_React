import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { fetchUsersById } from '../../services/api';

const UserDetails = () => {
  const params = useParams();
  console.log(params);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUsersById(params.userId).then(data => setUser(data));
  }, [params.userId]);

  if (!user) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <p>User details #{params.userId}</p>
      <img src={user.image} />
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <p>Email: {user.email}</p>
      <p>Age: {user.age}</p>
      <div className='flex'>
        <NavLink to='address'>Address</NavLink>
        <NavLink to='posts'>Posts</NavLink>
      </div>
      <Outlet />
    </div>
  );
};

// https://localhost/users/21
// https://localhost/users/21/address ❌
// https://localhost/users/21/posts ❌
export default UserDetails;