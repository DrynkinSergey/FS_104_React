import { useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handlePlusClick = () => {
    setCounter(prevState => prevState + 1);
  };
  const handleMinusClick = () => {
    setCounter(prev => prev - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <div className={s.flex}>
          <button onClick={() => handleMinusClick('Alex')} className='btn'>
            minus
          </button>
          <button className='btn' onClick={handleReset}>
            reset
          </button>
          <button onClick={handlePlusClick} className='btn'>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
