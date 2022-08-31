import React from 'react';
import PropTypes from 'prop-types';
import s from './Friendlist.module.css';


export default function Friendslist ({ friends }) {
  return (
    <ul className={s.friendlist}>
      {friends.map(friend => (
        <li key={friend.id} class={s.item}>
          <span
            className={friend.isOnline ? s.statusOn : s.statusOff}
          ></span>
          <img
            className={s.avatar}
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p className={s.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

Friendslist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isOnline: PropTypes.bool.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};