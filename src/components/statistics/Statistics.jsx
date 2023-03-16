import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utils';
import css from './Statistics.module.css';

export default function Statistics({ title = '', stats }) {
  const size = (100 / 100 / stats.length) * 1000;

  return (
    <section className={css.statistics}>
      <div className={css.statisticsContainer}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
          {stats.map(stat => (
            <li
              style={{ backgroundColor: getRandomHexColor(), width: size }}
              className={css.statItem}
              key={stat.id}
            >
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

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
