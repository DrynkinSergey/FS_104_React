import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    name: '',
    password: '',
  };
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values));
    options.resetForm();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name='name' placeholder='Enter your name' />
          <Field name='email' placeholder='Enter your email' />
          <Field name='password' type='password' placeholder='Enter your password' />
          <button type='submit'>Register</button>

          <p>
            You already have account?<Link to='/login'>Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
