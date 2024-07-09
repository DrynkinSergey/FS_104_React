import { useState } from 'react';
import s from './Forms.module.css';
import { useEffect } from 'react';
const ControlledForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
    setFormData({ username: '', password: '', email: '' });
  };

  // const handleChangeUserName = e => {
  //   setFormData({ ...formData, username: e.target.value });
  // };
  // const handleChangeEmail = e => {
  //   setFormData({ ...formData, email: e.target.value });
  // };
  // const handleChangePass = e => {
  //   setFormData({ ...formData, password: e.target.value });
  // };

  const handleChangeInput = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };
  useEffect(() => {
    if (formData.username === 'Petro') {
      alert('Petro is not valid username');
    }
  }, [formData.username]);

  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input
            value={formData.username}
            name='username'
            onChange={handleChangeInput}
            className={s.input}
            type='text'
            placeholder='Enter name...'
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={handleChangeInput}
            value={formData.email}
            name='email'
            className={s.input}
            type='email'
            placeholder='Enter email...'
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            onChange={handleChangeInput}
            value={formData.password}
            name='password'
            className={s.input}
            type='password'
            placeholder='Enter password...'
          />
        </label>
        <button className='btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
export default ControlledForm;
