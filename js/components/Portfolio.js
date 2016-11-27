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
        <div className="wrapper" id="portfolio">
            
        </div>
      </div>
    );
  }
}