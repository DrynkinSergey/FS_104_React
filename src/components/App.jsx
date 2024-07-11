import { UserForm } from './UserForm/UserForm';

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
      <UserForm />
    </>
  );
};
