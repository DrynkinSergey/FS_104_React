import { useEffect, useRef, useState } from 'react';
import s from './UseRefExample.module.css';
export const UseRefExample = () => {
  const myInputRef = useRef();
  const [value, setValue] = useState(0);
  const btnRef = useRef();
  const renderCount = useRef(0);

  useEffect(() => {
    console.log(myInputRef);
  }, []);

  useEffect(() => {
    renderCount.current++;
    console.log(renderCount.current);
  });
  return (
    <div>
      <h2>Use ref</h2>
      <input ref={myInputRef} className={s.hidden} type='file' />
      <button onClick={() => myInputRef.current.click()}>Add file</button>
      <button ref={btnRef} onClick={() => setValue(prev => prev + 1)}>
        Click me {value}
      </button>
    </div>
  );
};
