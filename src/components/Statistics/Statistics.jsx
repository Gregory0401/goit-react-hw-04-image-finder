import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';



export default function Statistics  ({ title, stats }) {
  return (
    <section className={s.statistics}>
     <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(data => (
          <li
            key={data.id}
            className={s.item}
          >
            <span className={s.label} >{data.label}</span>
            <span className={s.percentage} >{data.percentage}%</span>
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