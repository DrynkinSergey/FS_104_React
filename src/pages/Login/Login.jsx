import { Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate } from 'react-router-dom';
import { loginThunk } from '../../redux/auth/operations';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import s from './Login.module.css';
const Login = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const initialValues = {
    email: '',
    password: '',
  };
  const dispatch = useDispatch();
  const handleSubmit = (values, options) => {
    dispatch(loginThunk(values));
    console.log(values);
    options.resetForm();
  };
  if (isLoggedIn) {
    return <Navigate to='/' />;
  }
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field className='input' name='email' placeholder='Enter your email' />
          <Field className='input' name='password' type='password' placeholder='Enter your password' />
          <button className='btn' type='submit'>
            Login
          </button>
          <p>
            You don't have account?<Link to='/register'>Sign up!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
