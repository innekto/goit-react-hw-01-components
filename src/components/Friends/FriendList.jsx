import PropTypes from 'prop-types';
import FrendListItem from './FriendListItem';

import { FriendsList,FriendsItem } from './FriendsList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList >
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendsItem  key={id}>
          <FrendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendsItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};