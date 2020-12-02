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
        Form
        <form onSubmit={this.handlerSubmit}>
          <label htmlFor="" className={s.formLabel}>
            Name
            <input
              type="text"
              name="name"
              placeholder="Name"
              className={s.formInput}
              value={this.state.name}
              onChange={this.handlerNameChange}
            />
          </label>

          <label htmlFor="" className={s.formLabel}>
            tel
            <input
              type="tel"
              name="tel"
              placeholder="Telephone number"
              className={s.formInput}
              value={this.state.tel}
              onChange={this.handlerNameChange}
            />
          </label>

          <label htmlFor="" className={s.formLabel}>
            email
            <input
              type="email"
              name="email"
              placeholder="Email"
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
            отправить
          </button>
        </form>
      </div>
    );
  }
}
