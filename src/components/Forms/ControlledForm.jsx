import { useState } from 'react';
import s from './Forms.module.css';
import { useEffect } from 'react';
const ControlledForm = ({ register }) => {
  const [isOpenPass, setIsOpenPass] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    country: 'Ukraine',
    aboutMe: '',
    gender: 'female',
    agree: false,
  });
  const handleSubmit = e => {
    e.preventDefault();
    register(formData);
    setFormData({
      username: '',
      password: '',
      email: '',
      country: 'Ukraine',
      aboutMe: '',
      gender: 'female',
      agree: false,
    });
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

    if (name === 'agree') {
      return setFormData({ ...formData, agree: !formData.agree });
    }
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
            type={isOpenPass ? 'text' : 'password'}
            placeholder='Enter password...'
          />
          <button type='button' onClick={() => setIsOpenPass(prev => !prev)}>
            show
          </button>
        </label>
        <label className={s.label}>
          <span>Country</span>
          <select value={formData.country} onChange={handleChangeInput} className={s.input} name='country'>
            <option value='Ukraine'>Ukraine</option>
            <option value='USA'>USA</option>
            <option value='Canada'>Canada</option>
            <option value='Germany'>Germany</option>
          </select>
        </label>
        <label>
          <input
            checked={formData.gender === 'male'}
            onChange={handleChangeInput}
            type='radio'
            name='gender'
            value='male'
          />
          <span>Male</span>
        </label>
        <label>
          <input
            checked={formData.gender === 'female'}
            onChange={handleChangeInput}
            type='radio'
            name='gender'
            value='female'
          />
          <span>Female</span>
        </label>
        <label>
          <input
            checked={formData.gender === 'other'}
            onChange={handleChangeInput}
            type='radio'
            name='gender'
            value='other'
          />
          <span>Other</span>
        </label>
        <label className={s.label}>
          <span>About me</span>
          <textarea name='aboutMe' value={formData.aboutMe} onChange={handleChangeInput} />
        </label>
        <label>
          <input checked={formData.agree} name='agree' onChange={handleChangeInput} type='checkbox' />
          <span>I agree with rules!</span>
        </label>
        <button className='btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
export default ControlledForm;
