import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export default function FriendListItem({ friend }) {
  const className = [css.status];
  if (friend.isOnline) {
    className.push(css.isOnline);
  } else {
    className.push(css.isOffline);
  }
  return (
    <>
      <span className={className.join(' ')}></span>
      <img
        className={css.avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p>{friend.name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.number,
};
