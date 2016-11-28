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
                <h3>Front-End</h3>
                <SkillsProgress percent={90} skillName="Javascript" />
                <SkillsProgress percent={80} skillName="HTML5" />
                <SkillsProgress percent={80} skillName="CCS3" />
                <SkillsProgress percent={95} skillName="jQuery" />
                <SkillsProgress percent={55} skillName="Bootstrap" />
                <SkillsProgress percent={29} skillName="React.js" />
            </div>
            <div className="skills">
                <h3>Back-End</h3>
                <SkillsProgress percent={95} skillName="Javascript" />
                <SkillsProgress percent={80} skillName="Node.js" />
                <SkillsProgress percent={75} skillName="Express" />
                <SkillsProgress percent={60} skillName="Sequelize (MySQL)" />
                <SkillsProgress percent={50} skillName="REST APIs" />
            </div>
            <div className="skills">
                <h3>Other</h3>
                <SkillsProgress percent={80} skillName="Git" />
                <SkillsProgress percent={70} skillName="Heroku" />
                <SkillsProgress percent={80} skillName="Microsoft Office" />
            </div>
        </section>

    );
  }
}