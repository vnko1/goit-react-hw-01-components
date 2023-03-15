import PropTypes from 'prop-types';
import css from './Statistics.module.css';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title = '', stats }) {
  const size = (100 / 100 / stats.length) * 1000;

  return (
    <section className={css.statistics}>
      <div className={css.statisticsContainer}>
        {' '}
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
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
};
