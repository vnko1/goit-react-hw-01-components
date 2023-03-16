import PropTypes from 'prop-types';
import { Status, Img } from './FriendList.styled';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <Status status={isOnline}></Status>
      <Img src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
