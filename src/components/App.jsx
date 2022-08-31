import Profile from './Profile/Profile.jsx';
import Statistics from './Statistics/Statistics';
import Friendslist from './Friendslist/Friendslist';
import Transactions from './Transactions/Transactions';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json'

export default function App (){
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
<Friendslist friends={friends} />
<Transactions items={transactions} />
  </div>
  )
}
