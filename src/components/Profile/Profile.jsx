import clsx from 'clsx';
import s from './Profile.module.css';
const Profile = ({ user }) => {
  return (
    <article className={s.wrapper}>
      <section className={s.userCard}>
        <div className={s.imageWrapper}>
          <img className={s.img} src={user.image} />
        </div>
        <div className={s.content}>
          <h2>
            {user.lastName} {user.firstName}
          </h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p className={clsx(user.age > 18 ? s.green : s.red)}>Age: {user.age}</p>
          <p>Gender: {user.gender}</p>
          <p>
            Address: {user.address.city} {user.address.address}
          </p>
        </div>
      </section>
    </article>
  );
};
export default Profile;
