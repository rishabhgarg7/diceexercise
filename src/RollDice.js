import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = { num_die: 2, n1: 2, n2: 4 };
    this.rollDicefn = this.rollDicefn.bind(this);
  }

  rollDicefn() {
    let randn1 = Math.floor(Math.random() * (5 + 1)) + 1;
    let randn2 = Math.floor(Math.random() * (5 + 1)) + 1;

    this.setState({ n1: randn1, n2: randn2 });
  }

  render() {
    return (
      <div>
        <Die num={this.state.n1} />
        <Die num={this.state.n2} />
        <br />
        <button
          onClick={this.rollDicefn}
          className="Dice bttn-jelly bttn-md bttn-primary"
        >
          Roll the Dice!
        </button>
      </div>
    );
  }
}

export default RollDice;
