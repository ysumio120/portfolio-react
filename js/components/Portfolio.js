import React from "react";
import Project from "./Project";

export default class About extends React.Component {
  constructor() {
    super();
  }

render() {
    return (
      <section id="portfolio">
        <h1>Portfolio</h1>
        <Project title="Personal Website" imgSrc="images/random_1.jpg"/>
        <Project title="Personal Website" imgSrc="images/random_2.jpg"/>
        <Project title="Personal Website" imgSrc="images/random_3.jpg"/>
      </section>
    );
  }
}