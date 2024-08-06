import { useDispatch, useSelector } from 'react-redux';
import { AddForm } from './AddForm';
import { List } from './List';
import { SearchBar } from './SearchBar';
import s from './TodoList.module.css';
import { fetchTodosThunk } from '../../redux/todos/operations';
import { useEffect } from 'react';
import { selectIsError, selectIsLoading } from '../../redux/todos/selectors';
export const TodoList = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodosThunk());
  }, [dispatch]);
  return (
    <div className={s.todoWrapper}>
      <AddForm />
      <SearchBar />
      <List />
      {isLoading && <h1>Loading...</h1>}
      {isError && <h2>Something went wrong!</h2>}
    </div>
  );
};
