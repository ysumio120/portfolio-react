import React from "react";
import HeaderContent from "./HeaderContent";

export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundImg: "images/test.jpeg"
    }
  }

  render() {
    let styles = {
      position: "absolute",
      width: "100%",
      height: "100%",
      backgroundImage: "url(" + this.state.backgroundImg + ")",
      backgroundSize: "100% 100%",
      zIndex: -1,
      opacity: 0.6
    }
    let styles_2 = {
      position: "absolute",
      width: "100%",
      height: "100%",
      // display: "-moz-box",
      // display: "-webkit-flex",
      // // display: "flex",
      // justifyContent: "center",
      // WebkitJustifyContent: "center",
      // MozJustifyContent: "center",
      // MozAlignItems: "center",
      // WebkitAlignItems: "center",
      // alignItems: "center"
    }

    return (
      <div style={styles_2}>
        <div style={styles}></div>
        <HeaderContent />
      </div>
    );
  }

}