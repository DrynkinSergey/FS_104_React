import s from './Counter.module.css';

export const Counter = () => {
  const handleClick = () => {
    console.log('Plus click');
  };
  const handleMinusClick = name => {
    console.log(`hello ${name}`);
  };
  const handleReset = e => {
    console.log(e);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{1}</h1>
        <div className={s.flex}>
          <button onClick={() => handleMinusClick('Alex')} className='btn'>
            minus
          </button>
          <button className='btn' onClick={handleReset}>
            reset
          </button>
          <button onClick={handleClick} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
