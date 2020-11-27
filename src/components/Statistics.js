import PropTypes from "prop-types";
import s from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className="title">{title && title}</h2>
      <ul className={s.stats}>
        {stats.map((stat) => (
          <li className={s.item}>
            <span className={s.label}>{stat.label}</span>
            <span className={s.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
