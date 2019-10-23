import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    setInterval(() => {this.setState({date: new Date().toLocaleTimeString()})},1000)
  }
  render(){
    return <div>{this.state.date}</div>;
  }
}

render(<App />, document.getElementById("root"));
