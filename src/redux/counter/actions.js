import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from './constants';

export const increment = () => {
  return { type: INCREMENT };
};
export const decrement = () => {
  return { type: DECREMENT };
};
export const reset = () => {
  return { type: RESET };
};
export const changeStep = step => {
  return { type: CHANGE_STEP, payload: step };
};
