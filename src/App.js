// import Profile from "./components/User";
// import Statistics from "./components/Statistics";
// import FriendList from "./components/FriendList";
// import TransactionHistory from "./components/TransactionHistory";
// import Counter from "./components/Counter";
// import Dropdown from "./components/Dropdown";
// import ColorPicker from "./components/ColorPicker";
import UserForm from "./components/UserForm/UserForm";
// import user from "./user-data.json";
// import statistics from "./statistical-data.json";
// import friends from "./friends-data.json";
// import transactions from "./transactions-data.json";
// import colorPicker from "./components/ColorPicker.json";

export default function App() {
  return (
    <div>
      {/* <Profile
        url={user.avatar}
        title={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      /> */}

      {/* <Statistics title="Upload stats" stats={statistics} /> */}

      {/* <FriendList friends={friends} /> */}

      {/* <TransactionHistory items={transactions} /> */}

      {/* <Counter /> */}

      {/* <Dropdown /> */}

      {/* <ColorPicker options={colorPicker} /> */}

      <UserForm />
    </div>
  );
}
