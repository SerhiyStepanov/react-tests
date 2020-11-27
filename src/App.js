import Profile from "./components/User";
import user from "./user-data.json";

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
    </div>
  );
}
