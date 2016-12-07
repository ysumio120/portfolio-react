import React from "react";
import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact"

export default class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
          <About />
          <hr/>
          <Skills />
          <hr/>
          <Portfolio />
          <Contact />
      </div>
    );
  }
}