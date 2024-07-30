import { useDispatch, useSelector } from 'react-redux';
import s from './Counter.module.css';
import { DECREMENT, INCREMENT, RESET } from '../../redux/counter/constants';
import { selectCounter, selectStep } from '../../redux/counter/selectors';

export const Counter = () => {
  // йде до редакс і отримує данні від нього
  const counter = useSelector(selectCounter);
  const step = useSelector(selectStep);

  const dispatch = useDispatch();

  const handlePlusClick = () => {
    dispatch({ type: INCREMENT });
  };
  const handleMinusClick = () => {
    dispatch({ type: DECREMENT });
  };
  const handleResetClick = () => {
    dispatch({ type: RESET });
  };
  const handleChangeStep = e => {};
  return (
    <div className={s.flexContainer}>
      <div className={s.wrapper}>
        <h1>{counter}</h1>
        <input value={step} onChange={handleChangeStep} />
        <div className={s.flex}>
          <button className='btn' onClick={handleMinusClick}>
            minus
          </button>
          <button className='btn' onClick={handleResetClick}>
            reset
          </button>
          <button className='btn' onClick={handlePlusClick}>
            plus
          </button>
        </div>
      </div>
    </div>
  );
};
