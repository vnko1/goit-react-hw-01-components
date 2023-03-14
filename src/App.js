import user from './components/Profile/user.json';
import Profile from 'components/Profile/Profile';
import data from './components/Statistics/data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'components/Friends/friends.json';
import FriendList from 'components/Friends/FriendList';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList items={friends} />
    </div>
  );
}
