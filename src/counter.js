import React, { Component } from "react";
import { Button } from "reactstrap";

import "./App.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 66400231,
      val: 1,
      isPaused: false
    };
  }
  Time = () => {
    // 1- Convert to seconds:
    if (this.state.time >= 86400000) {
      return alert("Your milliseconds number must be < 86.400.000");
    } else {
      var seconds = this.state.time / 1000;
      // 2- Extract hours:
      const hours = parseInt(seconds / 3600); // 3,600 seconds in 1 hour
      seconds = seconds % 3600; // seconds remaining after extracting hours
      // 3- Extract minutes:
      var minutes = parseInt(seconds / 60); // 60 seconds in 1 minute
      // 4- Keep only seconds not extracted to minutes:
      const second = seconds % 60;
      const obj = {
        hour: String(hours).padStart(2, 0),
        minute: String(minutes).padStart(2, 0),
        second: second.toFixed(0).padStart(2, 0)
      };

      return obj;
    }
  };
  start = e => {
    this.setState({ isPaused: false });

    var x = this.state.time;
    if (!this.state.isPaused) {
      this.state.val = setInterval(() => {
        this.setState({
          time: x++
        });
      }, 1);
    }
  };
  stop = () => {
    clearInterval(this.state.val);
  };
  reset = e => {
    clearInterval(this.state.val);
    this.setState({ time: 0 });
  };
  render() {
    console.log(this.Time());
    return (
      <div className=" my-5 d-flex flex-column justify-content-center">
        <div className="my-5 counter">
          <div className="bloc">
            <p className="number">{this.Time().hour}</p>
            <p className="title">Hour</p>
          </div>
          <div className="bloc">
            <p className="number">:</p>
            <p className="title" />
          </div>
          <div className="bloc">
            <p className="number">{this.Time().minute}</p>
            <p className="title">Minute</p>
          </div>
          <div className="bloc">
            <p className="number">:</p>
            <p className="title" />
          </div>
          <div className="bloc">
            <p className="number">{this.Time().second}</p>
            <p className="title">Second</p>
          </div>
        </div>
        <div>
          <Button
            className="button"
            outline
            color="primary"
            onClick={this.start}
          >
            Start
          </Button>{" "}
          <Button className="button" outline color="danger" onClick={this.stop}>
            Stop
          </Button>{" "}
          <Button className="button" outline color="info" onClick={this.reset}>
            Reset
          </Button>{" "}
        </div>
      </div>
    );
  }
}

export default Counter;
