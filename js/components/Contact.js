import React from "react";

export default class Contact extends React.Component{
  render() {
    return (
      <footer id="contact">
        <div>
          <i className="fa fa-envelope" aria-hidden="true"></i>ysumio120@yahoo.com
        </div>
        <div>
          <i className="fa fa-phone" aria-hidden="true"></i>(609) 338-7485
        </div>
        <div>
          <i className="fa fa-github-alt" aria-hidden="true"></i><a target="_blank" href="https://github.com/ysumio120">Github</a>
        </div>
        <div>
          <i className="fa fa-linkedin" aria-hidden="true"></i><a target="_blank" href="https://www.linkedin.com/in/yuutasumioka">LinkedIn</a>
        </div>
      </footer>
    );
  }
}