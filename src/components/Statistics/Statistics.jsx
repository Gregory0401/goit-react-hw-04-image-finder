import React from 'react';
import PropTypes from 'prop-types';
import s from '../Feedback.module.css'

const Statistics = ({ good, neutral, bad, total, positiveFeedbackPercentage }) => (
                      <ul className={s.data}>
                      <li className={s.statistic}>Good:{good}</li>
                      <li className={s.statistic}>Bad:{bad}</li>
                      <li className={s.statistic}>Neutral:{neutral}</li>
                      <li className={s.statistic}>Total:{total}</li>
                      <li className={s.statistic}>Positive feedback:{positiveFeedbackPercentage}%</li>  
                      </ul> 
)

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
  };

  export default Statistics;