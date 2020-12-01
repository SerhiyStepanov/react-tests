import React, { Component } from "react";
import s from "./Dropdown.module.css";

export default class Dropdown extends Component {
  state = {
    open: false,
  };

  toggle = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  show = () => {
    this.setState({
      open: true,
    });
  };

  hide = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div className={s.Dropdown}>
        <button type="button" className={s.DropdownBtn} onClick={this.show}>
          Open
        </button>

        <button type="button" className={s.DropdownBtn} onClick={this.toggle}>
          {this.state.open ? "Приховати" : "Додати"}
        </button>

        <button type="button" className={s.DropdownBtn} onClick={this.hide}>
          Close
        </button>
        {this.state.open && <div className={s.DropdownMenu}> MENU </div>}
      </div>
    );
  }
}
