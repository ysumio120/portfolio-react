import React from "react";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";

export default class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <About />
          <Skills />
          <Portfolio />
      </div>
    );
  }
}