import React from "react";

export default class HeaderContent extends React.Component {
  constructor() {
    super();
    this.state = {
      role: "Full Stack Web Developer",
      objective: "Who loves building web appplications"
    }
  }

  render() {
    let styles = {
      position: "relative",
      top: "39%",
      color: "#222222",
      fontFamily: "Bungee",
      textAlign: "center"
    }

    return (
      <div style={styles}>
        <h1>{this.state.role}</h1>
        <h4><i>{this.state.objective}</i></h4>
      </div>
    );
  }

}