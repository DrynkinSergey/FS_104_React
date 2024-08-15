import { Triangle } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className='loader'>
      <Triangle visible={true} height='180' width='180' color='#b702f9' ariaLabel='triangle-loading' wrapperStyle={{}} wrapperClass='' />
    </div>
  );
};
export default Loader;
