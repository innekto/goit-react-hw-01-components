import PropTypes from 'prop-types';

import {
  StatisticsWrap,
  StatisticsContainer,
  StatstictTitle,
  StatisticsList,
  StatisticsItem,
} from './Statistics.styled';

export default function Statistics({ title = '', stats }) {
  return (
    <StatisticsWrap>
      <StatisticsContainer>
        {title && <StatstictTitle>{title}</StatstictTitle>}
        <StatisticsList>
          {stats.map(stat => (
            <StatisticsItem key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </StatisticsItem>
          ))}
        </StatisticsList>
      </StatisticsContainer>
    </StatisticsWrap>
  );
}
//пропси для статистики
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
