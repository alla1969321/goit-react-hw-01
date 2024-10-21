import userData from './data/userData.json';
import friends from './data/friendData.json';
import transactions from './data/transactionData.json';
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendList/FriendList.jsx';
import TransactionHistory from './components/TransactionHistory/TransactionHistory.jsx';
import css from './App.module.css';
const App = () => {
  const { username, tag, location, avatar, stats } = userData;
  return (
    <div className={css.container}>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
export default App;