import React from "react";

export default class NavbarNavs extends React.Component{
constructor(props) {
  super(props);
  this.smoothscroll = this.smoothscroll.bind(this);
}

  loadTabs(tabs) {
    return tabs.map(function(item, index) {
        return (<li 
        //onMouseEnter={this.smoothscroll.bind(this)} 
        key={index}><a href={"#" + item.toLowerCase()}>{item}</a></li>);
    })
  }

  smoothscroll(el) {
    // var duration = 1000;

    // while(duration >= 0) {      
    //   var difference = toPos - contentPos;
    //   var px = difference / duration * 10;

    //   setTimeout(function(duration) {
    //     window.scrollTo(0, currentPos + px);

    //     smoothscroll(currentPos + px, toPos, duration - 10);
    //   }, 10)
    // }
  }

  render() {
    return (
      <ul className="nav navbar-nav navbar-left" onClick={this.smoothscroll}>
        {this.loadTabs(this.props.tabs)} 
      </ul>
    );
  }
}