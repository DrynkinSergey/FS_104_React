import s from './Message.module.css';
const Message = ({ author = 'default', message = 'Default message' }) => {
  return (
    <div>
      <p className={`${s.green} ${s.title}`}>
        Author: <span>{author}</span>
      </p>
      <p>{message}</p>
    </div>
  );
};
export default Message;
