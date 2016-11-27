// var React = require("react");

// var NavbarHeader = React.createClass({

//   render: function() {
//     return (
//       <div className="navbar-header">
//         <a className="navbar-brand">{this.props.brandName}</a>
//       </div>
//     );
//   }
// });

// module.exports = NavbarHeader;

import React from "react";

export default class NavbarHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
  }

  mouseOver() {
    this.setState({hover: true})
  }

  mouseOut() {
    this.setState({hover: false})
  }

  render() {
    return (
      <div className="navbar-header" onMouseOver={this.mouseOver.bind(this)} onMouseOut={this.mouseOut.bind(this)}>
        <a className="navbar-brand">
          <img alt="Brand" src={this.state.hover ? "images/nav-brand-hover.png" : "images/nav-brand-nohover.png"}/>

        </a>
      </div>
    );
  }
}