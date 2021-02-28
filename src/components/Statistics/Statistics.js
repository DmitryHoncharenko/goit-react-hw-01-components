import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ stats }) => {
  // const { id, label, percentage } = statisticalData;
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul>
        {stats.map(el => (
          <li className="item" key={el.id}>
            <span className="label">{el.label}</span>
            <span className="percentage">{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
