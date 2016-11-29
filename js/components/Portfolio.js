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
        <Project title="Personal Website" imgSrc="images/personalsite.jpg"/>
        <Project title="Team Feed" imgSrc="images/teamfeed.jpg"/>
        <Project title="Personal Website" imgSrc="images/random_3.jpg"/>
      </section>
    );
  }
}