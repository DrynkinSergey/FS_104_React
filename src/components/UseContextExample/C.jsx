import { useContext } from 'react';
import { userContext } from '../../main';

export const C = ({ auto }) => {
  const context = useContext(userContext);
  return (
    <div>
      <h1>Hello</h1>
      <h2>
        {auto} {context.model}
      </h2>
    </div>
  );
};
