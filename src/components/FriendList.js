import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.lists}>
      {friends.map((el) => (
        <FriendListItem key={el.id} />
      ))}
    </ul>
  );
}

FriendList.PropType = {
  friends: PropTypes.array,
};
