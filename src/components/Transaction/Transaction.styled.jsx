import styled from '@emotion/styled'; //оформлення стилей в js файлі

const Table = styled.table`
  width: 700px;
  margin: 0 auto;
  background-color: rgb(95, 179, 175);
  overflow: hidden;
`;
const HeadText = styled.th`
  padding: 20px 0;
  background-color: rgb(132, 0, 107);
  color: white;
  border: 1px solid rgb(48, 70, 169);
`;

const Row = styled.tr`
  :nth-of-type(even) {
    background-color: white;
  }
`;

const MainText = styled.td`
 padding: 10px 0;
  text-align: center;
  border: 1px solid rgb(48, 70, 169);
}`;
export { Table, HeadText, Row, MainText };
