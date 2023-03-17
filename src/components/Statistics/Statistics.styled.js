import styled from '@emotion/styled'; //оформлення стилей в js файлі
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
//секція статистики
const StatisticsWrap = styled.section`
  margin-top: 20px;
`;
//контейнер статистики
const StatisticsContainer = styled.div`
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 0 0;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;
`;

//заголовок
const StatstictTitle = styled.h2`
  margin-bottom: 20px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 18px;
`;

//список

const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
`;
function listLength(StatisticsList) {
  return StatisticsList.children.length;
}

//statsitem
const StatisticsItem = styled.li`
  padding: 8px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: ${getRandomHexColor};
  width: calc(100% / ${listLength});
`;
export {
  StatisticsWrap,
  StatisticsContainer,
  StatstictTitle,
  StatisticsList,
  StatisticsItem,
};
