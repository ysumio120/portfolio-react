import React from "react";

export default class About extends React.Component {
  constructor() {
    super();
    this.state = {
      opacity_back: 0,
      opacity_links: 0
    }
  }

  onMouseEnter() {
    this.setState({opacity_back: 0.6, opacity_links: 1.0});
  }

  onMouseLeave() {
    this.setState({opacity_back: 0, opacity_links: 0})
  }

  render() {
    let background = {
      backgroundColor: "black",
      opacity: this.state.opacity_back,
      transition: "opacity 700ms",
      height: "100%",
      width: "100%",
      zIndex: 1,
      position: "absolute"
    }

    let links = {
      opacity: this.state.opacity_links,
      transition: "opacity 500ms",
    }

    return (
      <div className="project" onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)}>
        <div className="projectLinks" style={links} >
          <a href={this.props.deployment} target="_blank"><img src="images/www.png" /></a>
          <a href={this.props.github} target="_blank"><img src="images/github.png" /></a>
        </div>
        <div style={background}></div>
        <img src={this.props.imgSrc}/>
        <div className="projectTitle">{this.props.title}</div>
      </div>
    );
    }
}