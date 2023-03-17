import styled from '@emotion/styled'; //оформлення стилей в js файлі

const Status = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 10px;
  ${props => {
    // console.log(props);
    return props.isOnline ? 'background-color: green;' : 'background-color: red'
  }}
    
`;

const Avatar = styled.img`   
 margin: 10px;`

const Name = styled.p`
 color:grey
 `
export { Status, Avatar, Name };
