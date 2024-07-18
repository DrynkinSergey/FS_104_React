import { useState } from 'react';

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  console.log('Calc value a + b');
  const result = a + b;

  return (
    <div>
      <h2>Use memo</h2>
      <div>
        <button onClick={() => setA(a + 1)}>Update a {a}</button>
        <button onClick={() => setB(b + 1)}>Update b {b}</button>
        <button onClick={() => setC(c + 1)}>Update c {c}</button>
      </div>
      <p>Result: {result}</p>
    </div>
  );
};
