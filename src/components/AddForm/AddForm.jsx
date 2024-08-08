import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { addPostsThunk } from '../../redux/operations';

const AddForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(addPostsThunk(values));
    options.resetForm();
  };
  const initialValues = {
    title: '',
    body: '',
  };
  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name='title' placeholder='Enter title' />
          <Field name='body' placeholder='Enter body' />
          <button type='submit'>Add post</button>
        </Form>
      </Formik>
    </div>
  );
};
export default AddForm;
