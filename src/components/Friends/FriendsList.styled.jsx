import styled from '@emotion/styled'; //оформлення стилей в js файлі

const FriendsList = styled.ul`
   width: 400px;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
`;

const FriendsItem = styled.li`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    background-color: white;
    padding: 10px;
    border-radius: 5px;
    &:not(:last-child) {
    margin-bottom: 10px;
}
`

export { FriendsList,FriendsItem };