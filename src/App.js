// import "./index.css";
// import { Children } from "react";
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import user from './db/user.json';
import statisticalData from './db/statistical-data.json';
import FriendList from './components/FriendList/FriendList';
import friends from './db/friends.json';

function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Statistics title="Upload stats" stats={statisticalData} /> */}
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
    </>
  );
}

export default App;
