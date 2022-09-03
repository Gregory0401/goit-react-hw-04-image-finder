import React from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback.module.css'

const Notification = ({ message }) => <p className={s.notification}>{message}</p>;

Notification.propTypes = {
  message: PropTypes.string,
}

export default Notification;