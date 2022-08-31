import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.css';



export default function Statistics  ({ title, stats }) {
  return (
    <section className="statistics">
     <h2 className="title">{title}</h2>

      <ul className="statList">
        {stats.map(data => (
          <li
            key={data.id}
            className="item"
          >
            <span className="label">{data.label}</span>
            <span className="percentage">{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};