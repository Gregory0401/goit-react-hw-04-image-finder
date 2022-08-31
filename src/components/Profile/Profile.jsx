import styles from './Profile.css';

export default function Profile  ({username,
  tag,
  location,
  avatar,
  stats})  {
  
  return (
    <div>
       <div class="profile">
  <div class="description">
    <img
      src={avatar}
      alt="User avatar"
      class="avatar"
      width="250"
    />
    <p class="name">{username}</p>
    <p class="tag">{tag}</p>
    <p class="location">{location}</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">{stats.followers}</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">{stats.views}</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">{stats.likes}</span>
    </li>
  </ul>
</div>

    </div>
  );
};
