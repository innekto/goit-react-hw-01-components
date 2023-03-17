import user from 'data/user.json';
import Profile from 'components/Profile/Profile';
import data from 'data/data.json';
import Statistics from 'components/Statistics/Statistics';
import friends from 'data/friends.json';
import FriendList from 'components/Friends/FriendList';
import Transaction from './Transaction/Transaction';
import transactions from 'data/transactions.json';


export const App = () => {
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
      <Transaction items={transactions} />
    </div>
  );
};
