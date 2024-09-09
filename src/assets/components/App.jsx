import ControlledForm from './Forms/ControlledForm';
import ExampleForm from './useId/ExampleForm';

export const App = () => {
  const register = data => {
    console.log('Register in progress...');
    setTimeout(() => {
      console.log('Register done!');
      console.log(data);
    }, 3000);
  };
  return (
    <>
      <ControlledForm register={register} />
      <ExampleForm />
    </>
  );
};
