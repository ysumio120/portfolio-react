import React from "react";

export default class About extends React.Component {
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
      <div style={styles}>
        <div className="wrapper" id="about">
            <h1>About Me</h1>
            <img src="images/profile_pic.jpg"/>
            <h3>Yuuta Sumioka</h3>
            <div>
              <p>My first exposure to any programming was from my AP Computer Science class in high school. 
              With no previous knowledge, I was very intrigued by the process and unique programming languages needed 
              to create different applications. It wasn't long until I found myself enjoying learning how these 
              applications were built. With my newfound hobby, I graduated from Rutgers Univeristy in New Brunswick with a major in Computer Science and minor in Mathematics. Although I did some programming in 
              Java and C, much of studies involved algorithms/data structures and other theory-based topics.</p>

              <p>My growing passion for coding has opened my eyes to the booming tech world. Coding along with web
              development allows me to expand on my creativity and further challenges my problem solving capablitlies.
              The love for coding comes with sleepless nights and frustration; however, this pushes me keep up with 
              the latest technologies and I have been enjoying every second of it.Ultimately, my goal is to not only
              create pratical applications for users, but build applications that people can appreciate.</p>

              <p>I am a full-stack web developer applying my experiences with Javascript,
              HTML, CSS, jQuery, Node.js, mySQL, and responsive design. I spend a lot of time on the front-end with 
              interests in UX/UI design. Despite my liking for front-end, I also have an understanding of the back-end 
              layer having used Express.js and Sequelize. I expect to continue learning as new technolgies develop and 
              tackle any problems or tasks, whether it is front-end or back-end programming.</p>
            </div>
        </div>
      </div>
    );
  }
}