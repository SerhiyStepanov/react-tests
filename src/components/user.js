import PropTypes from "prop-types";

export default function Profile(
  { url, title, tag, location, stats },
  children
) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={url}
          alt="Аватар пользователя"
          className="avatar"
          width="240"
        />
        <p className="name">{title}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
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
