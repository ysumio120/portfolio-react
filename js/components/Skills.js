import React from "react";
import SkillsProgress from "./SkillsProgress"

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills">
                <h3>Front-End</h3><hr/>
                <SkillsProgress percent={90} skillName="Javascript" badge="images/badges/javascript-badge.png"/>
                <SkillsProgress percent={80} skillName="HTML5" badge="images/badges/html5-badge.png"/>
                <SkillsProgress percent={80} skillName="CCS3" badge="images/badges/css3-badge.png"/>
                <SkillsProgress percent={95} skillName="jQuery" badge="images/badges/jquery-badge.png"/>
                <SkillsProgress percent={55} skillName="Bootstrap" badge="images/badges/bootstrap-badge.png"/>
                <SkillsProgress percent={29} skillName="React.js" badge="images/badges/react-badge.png"/>
            </div>
            <div className="skills">
                <h3>Back-End</h3>
                <SkillsProgress percent={95} skillName="Javascript" badge="images/badges/javascript-badge.png"/>
                <SkillsProgress percent={80} skillName="Node.js" badge="images/badges/nodejs-badge.png"/>
                <SkillsProgress percent={75} skillName="Express" badge="images/badges/express-badge.png"/>
                <SkillsProgress percent={60} skillName="Sequelize (MySQL)" badge="images/badges/sequelize-badge.png"/>
                <SkillsProgress percent={50} skillName="REST APIs" badge="images/badges/api-badge.png"/>
            </div>
            <div className="skills">
                <h3>Other</h3>
                <SkillsProgress percent={80} skillName="Git" badge="images/badges/git-badge.png"/>
                <SkillsProgress percent={70} skillName="Heroku" badge="images/badges/heroku-badge.png"/>
                <SkillsProgress percent={80} skillName="Microsoft Office" badge="images/badges/office-badge.png"/>
            </div>
        </section>

    );
  }
}