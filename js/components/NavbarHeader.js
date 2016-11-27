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

export default class NavbarHeader extends React.Component{
  render() {
    return (
      <div className="navbar-header">
        <a className="navbar-brand">{this.props.brandName}</a>
      </div>
    );
  }
}