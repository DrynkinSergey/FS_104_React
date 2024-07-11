import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import s from './UserForm.module.css';
export const UserForm = () => {
  const registerSchema = Yup.object({
    name: Yup.string()
      .required('This field is required!')
      .min(3, 'Name must be more than 3 chars!')
      .max(20, 'Name must be less than 20 chars'),
    surname: Yup.string()
      .required('This field is required!')
      .min(3, 'surname must be more than 3 chars!')
      .max(20, 'surname must be less than 20 chars'),
    age: Yup.number()
      .required('This field is required!')
      .min(14, 'You must be more than 14 years!')
      .max(99, 'Wow so slow!'),
    role: Yup.string().oneOf(['admin', 'user']),
  });

  const initialValues = {
    name: '',
    surname: '',
    age: '',
    email: '',
    role: 'user',
    city: '',
    about: '',
  };

  const handleSubmit = (data, actions) => {
    console.log(data);
    actions.resetForm();
  };

  return (
    <div className={s.formWrapper}>
      <Formik validationSchema={registerSchema} initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name='name' />
            <ErrorMessage name='name' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Surname:</span>
            <Field className={s.input} name='surname' />
            <ErrorMessage name='surname' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Age:</span>
            <Field className={s.input} name='age' />
            <ErrorMessage name='age' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.input} name='email' />
            <ErrorMessage name='email' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>City:</span>
            <Field className={s.input} name='city' />
            <ErrorMessage name='city' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>Role</span>
            <Field className={s.input} name='role' as='select'>
              <option value='user'>User</option>
              <option value='admin'>Admin</option>
              <option value='hacker'>Hacker</option>
            </Field>
            <ErrorMessage name='role' component='span' className={s.error} />
          </label>
          <label className={s.label}>
            <span>About</span>
            <Field className={s.input} as='textarea' name='about'></Field>
            <ErrorMessage name='about' component='span' className={s.error} />
          </label>
          <button type='submit'>Create</button>
        </Form>
      </Formik>
    </div>
  );
};
