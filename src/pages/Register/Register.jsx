import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerThunk } from '../../redux/auth/operations';
import s from './Register.module.css';
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
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <Field className='input' name='name' placeholder='Enter your name' />
          <Field className='input' name='email' placeholder='Enter your email' />
          <Field className='input' name='password' type='password' placeholder='Enter your password' />
          <button className='btn' type='submit'>
            Register
          </button>

          <p>
            You already have account?<Link to='/login'>Sign in</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default Register;
