import PropTypes from "prop-types";
import s from "./User.module.css";

export default function Profile(
  { url, title, tag, location, stats },
  children
) {
  return (
    <div className={s.profile}>
      <div className="description">
        <img src={url} alt="Аватар пользователя" className={s.avatar} />
        <p className={s.name}>{title}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.list}>
          <span className="label">Followers</span>
          <span className={s.quantity}>{stats.followers}</span>
        </li>
        <li className={s.list}>
          <span className="label">Views</span>
          <span className={s.quantity}>{stats.views}</span>
        </li>
        <li className={s.list}>
          <span className="label">Likes</span>
          <span className={s.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  url: PropTypes.string,
  title: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
};
