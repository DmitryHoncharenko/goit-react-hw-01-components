import React from 'react';
import PropTypes from 'prop-types';
import s from './Statistics.module.css'

const Statistics = ({title, stats }) => {
  // const { id, label, percentage } = statisticalData;
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>

      <ul className={s.statList}>
        {stats.map(el => {
          const { id, label, percentage } = el;
          return (
            <li className={s.item} key={id}>
              <span className="label">{label}</span>
              <span className="percentage">{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
