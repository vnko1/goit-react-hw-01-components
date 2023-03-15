import FrendListItem from './FriendListItem';
import css from './Friendlist.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <FrendListItem key={friend.id} friend={friend} />
        </li>
      ))}
    </ul>
  );
}
