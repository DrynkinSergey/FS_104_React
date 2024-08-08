import { useDispatch, useSelector } from 'react-redux';
import { selectPosts } from '../../redux/selectors';
import { deleteTodoThunk } from '../../redux/operations';

const Posts = () => {
  const posts = useSelector(selectPosts);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <button onClick={() => dispatch(deleteTodoThunk(post.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Posts;
