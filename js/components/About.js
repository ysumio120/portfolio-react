import React from "react";

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <section id="about">
            <h1>Yuuta Sumioka</h1>
            <img src="images/profile_pic.jpg"/>
            <div>
              <h3>About me</h3>
              <p>I am a full-stack web developer applying my experiences with Javascript, HTML, CSS, jQuery, Node.js, 
              MySQL, and responsive design. I like to spend time on the front-end with interests in UX/UI design. Not 
              only do I enjoy working on the front-end, I also have an understanding of the back-end 
              having used Express.js and Sequelize. I expect to continue learning as new technolgies develop and 
              tackle any problems or tasks, whether it is front-end or back-end programming.</p>
              
              <p>My first exposure to any programming was in my comuter science class during high school. 
              I was fascinated by the programming language (Java) and the unique syntax needed to create different 
              applications. It wasn't long until I found myself enjoying the process in building these applications. 
              Moving forward with my newfound passion, I graduated from Rutgers Univeristy New Brunswick with a major 
              in Computer Science and minor in Mathematics.</p>

              <p>The idea that there are 'endless' possibilities with programming has kept me engrossed in this field and 
              continues to appeal to me today. My growing passion for coding has opened my eyes to the booming tech world. 
              Coding along with web development allows me to expand on my creativity and further challenges my problem 
              solving skills. The love for coding comes with sleepless nights and frustration to understand the latest 
              technologies, but I have been enjoying every second of it. Ultimately, my goal is to not only create practical 
              applications for users, but also build applications that people can truly appreciate.</p>  
            </div>
        </section>

    );
  }
}