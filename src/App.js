// import Profile from "./components/User/User";
// import Statistics from "./components/Statistics/Statistics";
// import FriendList from "./components/FriendList/FriendList";
// import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
// import Counter from "./components/Counter/Counter";
// import Dropdown from "./components/Dropdown/Dropdown";
// import ColorPicker from "./components/ColorPicker/ColorPicker";
import AppUserForm from "./components/UserForm/AppUserForm";
// import AppFeedback from "./components/Feedback/AppFeedback";
// import CounterHook from "./components/hooks/CounterHooks";
// import SignupForm from "./components/hooks/SignupForm";

// import user from "./user-data.json";
// import statistics from "./statistical-data.json";/
// import friends from "./friends-data.json";
// import transactions from "./transactions-data.json";
// import colorPicker from "./components/ColorPicker/ColorPicker.json";

import Contacts from "../src/Copy";

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
      <AppUserForm />
      {/* <AppFeedback /> */}
      {/* <CounterHook /> */}
      {/* <SignupForm /> */}
      <Contacts />
    </div>
  );
}
