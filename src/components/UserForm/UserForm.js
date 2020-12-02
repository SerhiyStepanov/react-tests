import React, { Component } from "react";
import s from "./UserForm.module.css";

export default class UserForm extends Component {
  state = {
    name: "",
    tel: "",
    email: "",
  };

  handleNameChange = (eve) => {
    this.setState({
      [eve.currentTarget.name]: [eve.currentTarget.value],
    });
  };

  render() {
    return (
      <div>
        Form
        <form className={s.container}>
          <label htmlFor="" className={s.formLabel}>
            Name
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </label>

          <label htmlFor="" className={s.formLabel}>
            tel
            <input
              type="tel"
              name="tel"
              value={this.state.tel}
              onChange={this.handleNameChange}
            />
          </label>

          <label htmlFor="" className={s.formLabel}>
            email
            <input
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleNameChange}
            />
          </label>
        </form>
      </div>
    );
  }
}
