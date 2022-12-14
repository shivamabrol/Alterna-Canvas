import React, { Component } from "react";

class Zoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: "month",
    };
  }

  change(ev) {
    const newLevel = ev.target.value;

    this.setState({
      level: newLevel,
    });

    if (this.props.onChange) {
      this.props.onChange({ level: newLevel });
    }
  }

  render() {
    return (
      <span className="toolbar-item">
        Zoom:
        <label>
          <input
            type="radio"
            name="zoom"
            value="month"
            onChange={(ev) => this.change(ev)}
            checked={this.state.level === "month"}
          />{" "}
          Month
        </label>
        <label>
          <input
            type="radio"
            name="zoom"
            value="week"
            onChange={(ev) => this.change(ev)}
            checked={this.state.level === "week"}
          />{" "}
          Week
        </label>
      </span>
    );
  }
}

export default Zoom;
