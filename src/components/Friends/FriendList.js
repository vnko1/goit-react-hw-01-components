import FrendListItem from './FriendListItem';

export default function FriendList(friends) {
  console.log(friends);
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li>
          <FrendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
          />
        </li>
      ))}
    </ul>
  );
}
