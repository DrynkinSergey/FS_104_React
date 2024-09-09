import { useId } from 'react';

export const Input = () => {
  const inputId = useId();
  return (
    <div>
      <label htmlFor={inputId}>Input click me!</label>
      <input id={inputId} type='text' />
    </div>
  );
};
