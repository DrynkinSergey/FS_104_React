import { Field, Form, Formik } from 'formik';

export const AuthForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
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
