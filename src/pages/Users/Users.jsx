import { useEffect, useState } from 'react';
import UsersList from '../../components/UsersList/UsersList';
import { fetchUsers } from '../../services/api';
import SearchBar from '../../components/SearchBar/SearchBar';
import { useSearchParams } from 'react-router-dom';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [filterValue, setFilterValue] = useState('');

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    fetchUsers().then(data => setUsers(data));
  }, []);

  const handleChangeFilter = newValue => {
    setFilterValue(newValue);

    searchParams.set('query', newValue);
    setSearchParams(searchParams);
  };

  const filteredData = users.filter(
    item =>
      item.firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
      item.lastName.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <>
      <SearchBar handleChangeFilter={handleChangeFilter} filterValue={filterValue} />
      <UsersList users={filteredData} />
    </>
  );
};
export default Users;
// http://localhost:5173/users
// http://localhost:5173/users/
