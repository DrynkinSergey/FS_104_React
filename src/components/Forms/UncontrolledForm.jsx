import s from './Forms.module.css';
const UncontrolledForm = () => {
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const { email, username, password } = form.elements;
    console.log({ email: email.value, username: username.value, password: password.value });
    form.reset();
  };
  return (
    <div className={s.wrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input name='username' className={s.input} type='text' placeholder='Enter name...' />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input name='email' className={s.input} type='email' placeholder='Enter email...' />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input name='password' className={s.input} type='password' placeholder='Enter password...' />
        </label>
        <button className='btn' type='submit'>
          Register
        </button>
      </form>
    </div>
  );
};
export default UncontrolledForm;
