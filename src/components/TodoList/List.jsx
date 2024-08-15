import { useDispatch, useSelector } from 'react-redux';
import { selectSortedTodos } from '../../redux/todos/selectors';
import { selectFilter } from '../../redux/filter/selectors';
import s from './TodoList.module.css';
import { deleteTodoThunk, toggleTodoThunk } from '../../redux/todos/operations';
export const List = () => {
  const todos = useSelector(selectSortedTodos);
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const filteredData = todos.filter(item => item.text.toLowerCase().includes(filter.toLowerCase()));
  return (
    <div>
      <ul className={s.list}>
        {filteredData.length ? (
          filteredData.map(item => (
            <li className={s.todo} key={item.id}>
              <input checked={item.completed} type='checkbox' onChange={() => dispatch(toggleTodoThunk(item))} />
              <p>{item.text}</p>
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
