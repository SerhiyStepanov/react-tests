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

  incrementNeutral = (e) => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  incrementBad = (e) => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const values = Object.values(this.state);
    let total = 0;
    for (const value of values) {
      total += value;
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    console.log();
  };

  render() {
    return (
      <div>
        <h2 className={s.title}>Please leave feedback</h2>
        <div className={s.btnContainer}>
          <button type="button" className={s.btn} onClick={this.incrementGood}>
            good
          </button>
          <button
            type="button"
            className={s.btn}
            onClick={this.incrementNeutral}
          >
            neutral
          </button>
          <button type="button" className={s.btn} onClick={this.incrementBad}>
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
              <p className={s.text}>Neutral : {this.state.neutral}</p>
            </li>
            <li>
              <p className={s.text}>Bad : {this.state.bad} </p>
            </li>
            <li>
              <p className={s.text}>Total : {this.countTotalFeedback()} </p>
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
