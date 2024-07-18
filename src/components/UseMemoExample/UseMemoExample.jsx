import { useMemo, useState } from 'react';

export const UseMemoExample = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);

  // a, b, c - state

  // a, b - result

  const calcResult = useMemo(() => {
    console.log('Calc start');
    for (let i = 0; i < 1_000_000_000; i++) {}
    console.log('CALC END');
    return c * c;
  }, [c]);

  const resultCalc = calcResult;

  // const result = a + b;
  const result = useMemo(() => {
    console.log('Calc value a + b');
    return a + b;
  }, [a, b]);

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
