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
        <Project title="Custom React Scrollbars (Open Source)" imgSrc="images/projects/reactscrollbar.jpg" deployment="https://www.npmjs.com/package/react-customized-scrollbar" github="https://github.com/ysumio120/react-customized-scrollbar"/>
        <Project title="Personal Website" imgSrc="images/projects/personalsite.jpg" deployment="https://yuutasumioka.herokuapp.com" github="https://github.com/ysumio120/portfolio-react"/>
        <Project title="Twitch Avid" imgSrc="images/projects/twitchavid.jpg" deployment="https://twitch-avid.herokuapp.com" github="https://github.com/ysumio120/react-redux-practice"/>
        <Project title="Inspire" imgSrc="images/projects/inspire.jpg" deployment="https://inspire-project2.herokuapp.com/" github="https://github.com/Wintermutate/Inspire-"/>
        <Project title="Team Feed" imgSrc="images/projects/teamfeed.jpg" deployment="https://team-feed.herokuapp.com" github="https://github.com/ysumio120/Team_Feed"/>
        <Project title="Pokemon Hangman" imgSrc="images/projects/pokemonhangman.jpg" deployment="https://pokemon-hangman.herokuapp.com" github="https://github.com/ysumio120/week-3-game"/>
      </section>
    );
  }
}