import React, { Component } from "react";
import s from "./Counter.module.css";

export default class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };
  state = {
    value: this.props.initialValue,
  };

  Increment = (eve) => {
    this.setState((prevState) => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  Decrement = (eve) => {
    this.setState((prevState) => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <button type="button" className={s.btn} onClick={this.Increment}>
          Збільшити на 1
        </button>

        <span className={s.value}>{this.state.value}</span>

        <button type="button" className={s.btn} onClick={this.Decrement}>
          Зменшити на 1
        </button>
      </div>
    );
  }
}
