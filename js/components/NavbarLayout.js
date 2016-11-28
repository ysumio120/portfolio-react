// var React = require("react");
// var NavbarHeader = require("./NavbarHeader");
// var NavbarNavs = require("./NavbarNavs");

// var NavbarLayout = React.createClass({
  
//   render: function() {
//     return (
//       <nav className="nav navbar-default container-fluid">
//         <NavbarHeader brandName= "Yuuta Sumioka"/>
//         <NavbarNavs />  
//       </nav>
//     );
//   }
// });

// module.exports = NavbarLayout;

import React from "react";
import NavbarHeader from "./NavbarHeader";
import NavbarNavs from "./NavbarNavs";

export default class NavbarLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      brandName: "Yuuta Sumioka",
      tabs: ["About", "Skills", "Portfolio", "Contact"]
    }
  }

  render() {
    return (
      <nav className="nav navbar-inverse navbar-fixed-top">
        <div className="container">
          <NavbarHeader brandName={this.state.brandName} />
          <NavbarNavs tabs={this.state.tabs} />  
        </div>
      </nav>
    );
  }
}