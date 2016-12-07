// var React = require("react");
// var ReactDOM = require("react-dom");
// var NavbarLayout = require("./components/NavbarLayout");

// var Test = React.createClass({
//   render: function() {
//     return <h1>HELLO!</h1>;
//   }
// });

import React from "react";
import ReactDOM from "react-dom";
import NavbarLayout from "./components/NavbarLayout";
import Header from "./components/Header";
import Content from "./components/Content"
// import About from "./components/About";
// import Portfolio from "./components/Portfolio";

var nav = document.getElementById("nav");
var frontpage = document.getElementById("frontpage");
var profileContent = document.getElementById("profileContent");
// var aboutme = document.getElementById("aboutme");
// var projects = document.getElementById("projects");

ReactDOM.render(<NavbarLayout />, nav);
ReactDOM.render(<Header />, frontpage);
ReactDOM.render(<Content />, profileContent);
//ReactDOM.render(<Portfolio />, projects)

