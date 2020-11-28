import Profile from "./components/User";
import Statistics from "./components/Statistics";
import FriendList from "./components/FriendList";
import user from "./user-data.json";
import statistics from "./statistical-data.json";
import friends from "./friends-data.json";

export default function App() {
  return (
    <div>
      <Profile
        url={user.avatar}
        title={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statistics} />

      <FriendList friends={friends} />
    </div>
  );
}
