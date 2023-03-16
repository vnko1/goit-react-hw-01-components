import PropTypes from 'prop-types';
import {
  Section,
  SectionContainer,
  Title,
  StatList,
  StatItem,
} from './Statistics.styled';

export default function Statistics({ title = '', stats }) {
  return (
    <Section>
      <SectionContainer>
        {title && <Title>{title}</Title>}
        <StatList>
          {stats.map(stat => (
            <StatItem items={stats} key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </StatItem>
          ))}
        </StatList>
      </SectionContainer>
    </Section>
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
