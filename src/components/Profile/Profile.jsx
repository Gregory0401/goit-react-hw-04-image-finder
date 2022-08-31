import s from './Profile.module.css';

export default function Profile  ({username,
  tag,
  location,
  avatar,
  stats})  {
  
  return (
    <div>
       <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
      width="250"
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li>
      <span className={s.label}>Followers</span>
      <span className={s.quantity}>{stats.followers}</span>
    </li>
    <li>
      <span className={s.label}>Views</span>
      <span className={s.quantity}>{stats.views}</span>
    </li>
    <li>
      <span className={s.label}>Likes</span>
      <span className={s.quantity}>{stats.likes}</span>
    </li>
  </ul>
</div>

    </div>
  );
};
