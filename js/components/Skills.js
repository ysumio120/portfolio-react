import React from "react";
import SkillsType from "./SkillsType"

export default class About extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <section id="skills">
            <h1>Skills</h1>
            <div className="skills">
                <h3>FrontEnd</h3>
                <SkillsType skillName="JavaScript" badge="images/badges/javascript-badge.png"/>
                <SkillsType skillName="HTML5" badge="images/badges/html5-badge.png"/>
                <SkillsType skillName="CCS3" badge="images/badges/css3-badge.png"/>
                <SkillsType skillName="jQuery" badge="images/badges/jquery-badge.png"/>
                <SkillsType skillName="Bootstrap" badge="images/badges/bootstrap-badge.png"/>
                <SkillsType skillName="React.js" badge="images/badges/react-badge.png"/>
                <SkillsType skillName="Redux" badge="images/badges/redux-badge.png"/>
            </div>
            <div className="skills">
                <h3>BackEnd</h3>
                <SkillsType skillName="JavaScript" badge="images/badges/javascript-badge.png"/>
                <SkillsType skillName="Node.js" badge="images/badges/nodejs-badge.png"/>
                <SkillsType skillName="Express" badge="images/badges/express-badge.png"/>
                <SkillsType skillName="MongoDB" badge="images/badges/mongodb-badge.png"/>
                <SkillsType skillName="Sequelize (MySQL)" badge="images/badges/sequelize-badge.png"/>
                <SkillsType skillName="REST APIs" badge="images/badges/api-badge.png"/>
            </div>
            <div className="skills">
                <h3>Other</h3>
                <SkillsType skillName="Git" badge="images/badges/git-badge.png"/>
                <SkillsType skillName="Heroku" badge="images/badges/heroku-badge.png"/>
                <SkillsType skillName="Microsoft Office" badge="images/badges/office-badge.png"/>
            </div>
        </section>

    );
  }
}