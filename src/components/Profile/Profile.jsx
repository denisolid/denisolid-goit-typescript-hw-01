import s from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={s.place}>
      <div className={s.profile}>
        <img className={s.avatar} src={image} alt={tag} />
        <p className={s.title}>{name}</p>
        <p className={s.description}>{tag}</p>
        <p className={s.description}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.statsItem}>
          <span className={s.statsItemTitle}>Followers</span>
          <span className={s.statsItemDescription}>{stats.followers}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsItemTitle}>Views</span>
          <span className={s.statsItemDescription}>{stats.views}</span>
        </li>
        <li className={s.statsItem}>
          <span className={s.statsItemTitle}>Likes</span>
          <span className={s.statsItemDescription}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
