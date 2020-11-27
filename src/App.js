import Profile from "./components/User";
import Statistics from "./components/Statistics";
import user from "./user-data.json";
import statistics from "./statistical-data.json";

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

      <Statistics
        key={statistics.map((el) => el.id)}
        title={statistics.title}
        stats={statistics}
      />
    </div>
  );
}
