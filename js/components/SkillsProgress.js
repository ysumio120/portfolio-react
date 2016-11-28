import React from "react";

export default class SkillsProgress extends React.Component {
  constructor(props) {
    super(props);

    let color;
    color = this.setColor(this.props.percent);
    this.state = {
      color: color
    }
  }

  setColor(percent) {
    if(this.props.percent < 30)
        return "crimson"
    else if(this.props.percent < 75)
        return "yellow";
    else
        return "limegreen";
  }

  render() {
    let styles = {
      width: this.props.percent + "%",
      backgroundColor: this.state.color
    }
    return (
      <div>
        <h4>{this.props.skillName}</h4>
        <div id="progressBar">
          <div style={styles} id="progress"></div>
        </div>
      </div>
    );
  }
}