import FrendListItem from './FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <FrendListItem key={friend.id} friend={friend} />
      ))}
    </ul>
  );
}
