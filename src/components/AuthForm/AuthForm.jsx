import { Field, Form, Formik } from 'formik';
import { useContext } from 'react';
import { authContext } from '../../context/ContextProvider';

export const AuthForm = () => {
  const { login } = useContext(authContext);
  const handleSubmit = (values, options) => {
    console.log(values);
    login(values);
    options.resetForm();
  };
  const initalValues = {
    email: '',
    password: '',
  };
  return (
    <div>
      <Formik initialValues={initalValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='email' placeholder='email' />
          <Field name='password' placeholder='password' />
          <button type='submit'>Login</button>
        </Form>
      </Formik>
    </div>
  );
};
