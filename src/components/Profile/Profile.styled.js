import styled from '@emotion/styled'; //оформлення стилей в js файлі

// контейнер профілю
const ProfileContainer = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
`;

//контейнер опису профілю
const ProfileDescrContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  padding: 16px 0;
  background-color: rgb(133, 188, 255);
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`;

//аватар профілю
const ProfileAvatar = styled.img`
  margin: auto;
  border-radius: 50%;
`;
//ім'я профілю
const ProfileName = styled.p`
  text-align: center;
  font-size: 19px;
  font-weight: 700;
`;

//текст під профілем
const UnderText = styled.p`
  text-align: center;
  color: rgb(255, 255, 255);
`;

//статистика
const StatsList = styled.ul`
  background-color: rgba(141, 141, 141, 0.77);
  display: flex;
  gap: 6px;
  justify-content: space-between;
  overflow: hidden;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

//елемент статистики
const StatsItem = styled.li`
  padding: 10px 0;
  width: calc(100% / 3);
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

//назва статистики,
// кольоруємо відносно назви))))
function colorPicker(props) {
  switch (props.children) {
    case 'Followers':
      return 'white';
    case 'Views':
      return '#DCB5FF';
    case 'Likes':
      return '#C4FF86';
    default:
      return 'black';
  }
}
const StatsLabel = styled.span`
  color: ${colorPicker};
  &: hover {
    color: black;
  }
`;

const StatsQuantity = styled.span`
  font-size: 17px;
  font-weight: 700;
  &: hover {
    color: white;
  }
`;
export {
  ProfileContainer,
  ProfileDescrContainer,
  ProfileAvatar,
  ProfileName,
  UnderText,
  StatsList,
  StatsItem,
  StatsLabel,
  StatsQuantity,
};
