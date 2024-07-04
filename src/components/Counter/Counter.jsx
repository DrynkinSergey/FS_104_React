import { useEffect, useState } from 'react';
import s from './Counter.module.css';

export const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  // Виконується лише один раз при етапі монтування!
  useEffect(() => {
    console.log('Вітаю, я відмалювався!');
  }, []);

  // Виконується ПЕРШИЙ раз і всі наступні, коли міняється лічильник!
  useEffect(() => {
    console.log('Counter is: ', counter);
    if (counter === 10) {
      setCounter(0);
    }
    if (counter < -5) {
      console.log('Зачекай, не так далеко!');
    }
    if (counter === 5) {
      console.log('Скоро в тебе буде 0');
    }
  }, [counter]);

  useEffect(() => {
    console.log('Step is:', step);
  }, [step]);

  useEffect(() => {
    console.log('Змінились або лічильник, або крок');
  }, [step, counter]);

  //❌❌❌ Виконується кожен раз, коли оновлюється стейт або пропс
  // useEffect(() => {
  //   console.log(`Render ${step}`);
  // });

  const handlePlusClick = () => {
    setCounter(prevState => prevState + step);
  };
  const handleMinusClick = () => {
    setCounter(prev => prev - step);
  };
  const handleReset = () => {
    setCounter(0);
    setStep(1);
  };

  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input type='text' onChange={e => setStep(+e.target.value)} />
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
