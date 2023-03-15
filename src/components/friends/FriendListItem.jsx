import PropTypes from 'prop-types';
import css from './Friendlist.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const className = [css.status];
  if (isOnline) {
    className.push(css.isOnline);
  } else {
    className.push(css.isOffline);
  }
  return (
    <>
      <span className={className.join(' ')}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
