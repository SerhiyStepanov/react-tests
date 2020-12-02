import React, { Component } from "react";
import UserForm from "./UserForm";

export default class AppUserForm extends Component {
  handlerFormSubmit = (data) => {
    console.log(data);
  };
  render() {
    return (
      <div>
        <UserForm onFormSubmit={this.handlerFormSubmit} />
      </div>
    );
  }
}
