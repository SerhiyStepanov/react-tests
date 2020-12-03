import React, { Component } from "react";
import s from "./Feedback.module.css";

export default class AppFeedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = (e) => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h2 className={s.title}>Please leave feedback</h2>
        <div className={s.btnContainer}>
          <button type="button" className={s.btn} onClick={this.incrementGood}>
            good
          </button>
          <button type="button" className={s.btn} onClick={this.increment}>
            neutral
          </button>
          <button type="button" className={s.btn} onClick={this.increment}>
            bad
          </button>
        </div>

        <div>
          <h2 className={s.title}>Statistics</h2>
          <ul>
            <li>
              <p className={s.text}>Good : {this.state.good}</p>
            </li>
            <li>
              <p className={s.text}>Neutral :</p>
            </li>
            <li>
              <p className={s.text}>Bad :</p>
            </li>
            <li>
              <p className={s.text}>Total :</p>
            </li>
            <li>
              <p className={s.text}>Positive feedback : %</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
