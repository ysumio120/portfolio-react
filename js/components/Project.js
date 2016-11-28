import React from "react";

export default class About extends React.Component {
  constructor() {
    super();
  }

  onHover() {
    
  }
  render() {
      return (
        <div className="project">
            <img src={this.props.imgSrc}/>
            <div className="projectTitle">{this.props.title}</div>
        </div>
      );
    }
}