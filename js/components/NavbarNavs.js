// var React = require("react");

// var tabs = ["About", "Portfolio", "Contact"];


// var NavbarNavs = React.createClass({
//   loadTabs: function(tabs) {
//     for(var i = 0; i < tabs.length; i++) {
//       return tabs.map(function(item) {
//         return <li><a>{item}</a></li>;
//       })
//     }
//   },
//   render: function() {
//     return (
//       <ul className="nav navbar-nav navbar-right">
//         {this.loadTabs(tabs)} 
//       </ul>
//     );
//   }
// });

// module.exports = NavbarNavs;

import React from "react";

export default class NavbarNavs extends React.Component{
  loadTabs(tabs) {
    return tabs.map(function(item, index) {
        return <li key={index}><a href={"#" + item.toLowerCase()}>{item}</a></li>;
    })
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-left">
        {this.loadTabs(this.props.tabs)} 
      </ul>
    );
  }
}