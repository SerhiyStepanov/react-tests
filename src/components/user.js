export default function Profile(props) {
  return (
    <div className="profile">
      <div className="description">
        <img
          src={props.url}
          alt="Аватар пользователя"
          className="avatar"
          width="240"
        />
        <p className="name">{props.title}</p>
        <p className="tag">{props.tag}</p>
        <p className="location">{props.location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">1000</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">2000</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">3000</span>
        </li>
      </ul>
    </div>
  );
}
