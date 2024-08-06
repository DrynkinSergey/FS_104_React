import { Field, Form, Formik } from 'formik';
import s from './TodoList.module.css';
import { useDispatch } from 'react-redux';
import { addTodoThunk } from '../../redux/todos/operations';

export const AddForm = () => {
  const dispatch = useDispatch();
  const initialValues = { todo: '' };

  const onSubmit = (values, options) => {
    dispatch(addTodoThunk({ todo: values.todo }));
    options.resetForm();
  };
  return (
    <div className={s.addFormWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <Field className={s.input} name='todo' placeholder='Enter new todo' />
          <button type='submit'>Add todo</button>
        </Form>
      </Formik>
    </div>
  );
};
