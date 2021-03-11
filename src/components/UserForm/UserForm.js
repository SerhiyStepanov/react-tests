import React, { Component } from "react";
import s from "./UserForm.module.css";

export default class UserForm extends Component {
  state = {
    name: "",
    tel: "",
    email: "",
  };

  handlerNameChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handlerSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onFormSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      tel: "",
      email: "",
    });
  };

  render() {
    return (
      <div className={s.container}>
        <p className={s.title}>Registration</p>
        <form onSubmit={this.handlerSubmit}>
          <label className={s.formLabel}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              className={s.formInput}
              value={this.state.name}
              onChange={this.handlerNameChange}
            />
          </label>

          <label className={s.formLabel}>
            Telephone
            <input
              type="tel"
              name="tel"
              placeholder="Enter number"
              className={s.formInput}
              value={this.state.tel}
              onChange={this.handlerNameChange}
            />
          </label>

          <label className={s.formLabel}>
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter email"
              className={s.formInput}
              value={this.state.email}
              onChange={this.handlerNameChange}
            />
          </label>

          <button
            type="submit"
            className={s.submitBtn}
            disabled={this.state.name === "" || this.state.email === ""}
          >
            send
          </button>
        </form>
      </div>
    );
  }
}
