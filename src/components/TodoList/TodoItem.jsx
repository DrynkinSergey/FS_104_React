import s from './TodoList.module.css';
export const TodoItem = ({ handleDeleteTodo, id, todo }) => {
  return (
    <li className={s.item}>
      <span>{todo}</span>
      <button onClick={() => handleDeleteTodo(id)} className='btn border' size='18px'>
        Delete
      </button>
    </li>
  );
};
