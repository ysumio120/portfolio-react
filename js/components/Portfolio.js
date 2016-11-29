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
        <Project title="Personal Website" imgSrc="images/personalsite.jpg" deployment="https://yuutasumioka.herokuapp.com" github="https://github.com/ysumio120/portfolio-react"/>
        <Project title="Team Feed" imgSrc="images/teamfeed.jpg" deployment="https://team-feed.herokuapp.com" github="https://github.com/ysumio120/Team_Feed"/>
        <Project title="Pokemon Hangman" imgSrc="images/pokemonhangman.jpg" deployment="https://pokemon-hangman.herokuapp.com" github="https://github.com/ysumio120/week-3-game"/>
      </section>
    );
  }
}