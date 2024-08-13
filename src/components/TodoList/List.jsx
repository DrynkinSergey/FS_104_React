import { useDispatch, useSelector } from 'react-redux';
import { selectSortedTodos, selectUncompletedTodosMemo } from '../../redux/todos/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import s from './TodoList.module.css';
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todos/operations';
export const List = () => {
  const todos = useSelector(selectSortedTodos);
  const filter = useSelector(selectFilter);
  const uncompletedTodos = useSelector(selectUncompletedTodosMemo);
  const dispatch = useDispatch();

  const filteredData = todos.filter(item => item.todo.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <h2>Uncompleted: {uncompletedTodos}</h2>
      <ul className={s.list}>
        {filteredData.length ? (
          filteredData.map(item => (
            <li className={s.todo} key={item.id}>
              <input checked={item.completed} type='checkbox' onChange={() => dispatch(toggleTodoThunk(item))} />
              <p>{item.todo}</p>
              <button className={s.btn} onClick={() => dispatch(deleteTodoThunk(item.id))}>
                Delete
              </button>
            </li>
          ))
        ) : (
          <h2>No data received!</h2>
        )}
      </ul>
    </div>
  );
};
