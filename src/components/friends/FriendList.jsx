import PropTypes from 'prop-types';
import FrendListItem from './FriendListItem';

import { Friends, FriendItem } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <Friends>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendItem key={id}>
          <FrendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </FriendItem>
      ))}
    </Friends>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
