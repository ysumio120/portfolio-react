import React from "react";

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity: 0,
      opacity2: 0
    }
  }

  onMouseEnter() {
    this.setState({opacity: 0.6, opacity2: 1.0});
  }

  onMouseLeave() {
    this.setState({opacity: 0, opacity2: 0})
  }

  render() {
    let styles = {
      backgroundColor: "black",
      opacity: this.state.opacity,
      transition: "opacity 700ms",
      height: "100%",
      width: "100%",
      zIndex: 1,
      position: "absolute"
    }

    let styles2 = {
      opacity: this.state.opacity2,
      transition: "opacity 500ms",
    }

    return (
      <div className="project" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <div className="projectLinks" style={styles2} >
          <a href="https://yuutasumioka.herokuapp.com" target="_blank"><img src="images/web.png" /></a>
          <a href="https://github.com/ysumio120/portfolio-react" target="_blank"><img src="images/github.png" /></a>
        </div>
        <div style={styles}></div>
        <img src={this.props.imgSrc}/>
        <div className="projectTitle">{this.props.title}</div>
      </div>
    );
    }
}