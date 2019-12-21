import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  static defaultProps = { num: 6 };

  render() {
    const n_words = {
      1: "one",
      2: "two",
      3: "three",
      4: "four",
      5: "five",
      6: "six"
    };

    // const string = {`fas fa-dice-${n_words[this.props.num]}`}
    // const string2 = `fas fa-dice-{}`
    return <i className={`Die fas fa-dice-${n_words[this.props.num]}`} />;
  }
}

export default Die;
