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