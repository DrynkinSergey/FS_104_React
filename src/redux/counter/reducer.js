import { CHANGE_STEP, DECREMENT, INCREMENT, RESET } from "./constants";

const initialState = {
  counter: 0,
  step: 1,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + state.step,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - state.step,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
        step: 1,
      };
    case CHANGE_STEP:
      return {
        ...state,
        step: action.payload,
      };
    default:
      return state;
  }
};
