import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friendlist.css';


export default function Friendslist ({ friends }) {
  return (
    <ul class="friendlist">
      {friends.map(friend => (
        <li key={friend.id} class="item">
          <span
            class={friend.isOnline ? "statusOn" : "statusOff"}
          ></span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
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