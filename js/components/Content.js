import React from "react";
import About from "./About";
import Skills from "./Skills";

export default class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    let styles = {
      position: "absolute",
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }

    return (
      <div>
          <About />
          <Skills />
      </div>
    );
  }
}