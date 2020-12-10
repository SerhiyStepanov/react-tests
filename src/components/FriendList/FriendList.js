import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";

import s from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={s.lists}>
      {friends.map((el) => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.PropType = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
