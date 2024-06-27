import clsx from 'clsx';
import s from './Message.module.css';
const Message = ({ author = 'default', message = 'Default message' }) => {
  const isOnline = true;
  return (
    <div>
      {/* <p className={`${s.green} ${s.title} `}> */}
      <p className={clsx(s.green, s.title, isOnline && s.online)}>
        Author: <span>{author}</span>
      </p>
      <p>{message}</p>
    </div>
  );
};
export default Message;
