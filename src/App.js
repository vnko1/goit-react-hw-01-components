import user from './components/profile/user.json';
import Profile from 'components/profile/Profile';
import data from './components/statistics/data.json';
import Statistics from 'components/statistics/Statistics';
import friends from 'components/friends/friends.json';
import FriendList from 'components/friends/FriendList';
import transactions from './components/transactions/transactions.json';
import TransactionHistory from 'components/transactions/TransactionHistory';

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
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
