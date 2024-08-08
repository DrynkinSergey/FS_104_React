import { useDispatch } from 'react-redux';
import AddForm from './AddForm/AddForm';
import Posts from './Posts/Posts';
import { useEffect } from 'react';
import { fetchPosts } from '../redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <div>
      <AddForm />
      <Posts />
    </div>
  );
};
