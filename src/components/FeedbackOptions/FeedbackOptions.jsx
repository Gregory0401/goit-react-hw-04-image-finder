import React from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const arr = Object.keys(options);
    return (
    <ul className={s.buttons}>{arr.map(option => {
      return (  
        <button  type="button" name={option} className={s.button} onClick={onLeaveFeedback}>
          {option}
          </button>  
      );
    })
 } </ul>)
  }; 
  
  FeedbackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
  }
  
  export default FeedbackOptions;