import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { addTodoThunk } from '../../redux/todos/operations';

export const AddForm = () => {
  const dispatch = useDispatch();
  const initialValues = { text: '' };

  const onSubmit = (values, options) => {
    dispatch(addTodoThunk({ text: values.text }));
    options.resetForm();
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='text' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
