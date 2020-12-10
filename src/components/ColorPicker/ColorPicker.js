import React, { Component } from "react";
import s from "./ColorPicker.module.css";

export default class ColorPicker extends Component {
  state = {
    activOptionIdx: 0,
  };

  setActivIdx = (index) => {
    this.setState({ activOptionIdx: index });
  };

  makeOptionClassName = (index) => {
    const OptionClass = [s.ColorPickerOption];
    if (index === this.state.activOptionIdx) {
      OptionClass.push(s.ColorPickerActiv);
    }
    return OptionClass.join(" ");
  };

  render() {
    const { label } = this.props.options[this.state.activOptionIdx];
    return (
      <div className={s.ColorPicker}>
        <h2 className={s.ColorPickerTitle}>Color Picker</h2>
        <p>Color is : {label}</p>
        <div className={s.ColorPickerContainer}>
          {this.props.options.map(({ label, color }, index) => (
            <button
              key={label}
              className={this.makeOptionClassName(index)}
              style={{
                background: color,
              }}
              onClick={() => {
                this.setActivIdx(index);
              }}
            ></button>
          ))}
        </div>
      </div>
    );
  }
}
