import React from "react";
import PropTypes from "prop-types";
import s from "./Feedback.module.css";

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  return (
    <ul className={s.btnContainer}>
      {options.map((el) => (
        <li key={el}>
          <button
            type="button"
            className={s.btn}
            onClick={() => onLeaveFeedback(el)}
          >
            {el}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  increment: PropTypes.func,
  options: PropTypes.array,
};
