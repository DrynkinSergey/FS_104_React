import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { fetchTodosThunk } from '../../redux/todos/operations';
import { useEffect } from 'react';
import { selectIsError } from '../../redux/todos/selectors';
import Filter from './Filter';
export const TodoList = () => {
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <Filter />
      <List />
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
};
