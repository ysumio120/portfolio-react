import React from "react";

export default class SkillsProgress extends React.Component {
  constructor(props) {
    super(props);

    let color;
    color = this.setColor(this.props.percent);
    this.state = {
      color: color,
      percent: this.props.percent
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

  loadBar() {
    this.setState({percent: this.props.percent});
  }

  revertBar() {
    this.setState({percent: 0});
  }

  render() {
    let styles = {
      width: this.state.percent + "%",
      backgroundColor: this.state.color,
      transition: "width 1s"
    }
    return (
      <div className="skillsProgress" 
      //onMouseOver={this.loadBar.bind(this)} onMouseLeave={this.revertBar.bind(this)}
      >
        <img src={this.props.badge}/>
        <h4>{this.props.skillName}</h4>
        {/*<div id="progressBar">
          <div style={styles} id="progress" ></div>
        </div>*/}
      </div>
    );
  }
}