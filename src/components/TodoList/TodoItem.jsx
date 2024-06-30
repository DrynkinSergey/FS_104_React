import s from './TodoList.module.css'
export const TodoItem = ({ id, completed, todo }) => {
	return (
		<li className={s.item}>
			<input type='checkbox' />
			<span>{todo}</span>
			<button className='btn border' size='18px'>
				Delete
			</button>
		</li>
	)
}
