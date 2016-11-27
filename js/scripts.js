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
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Portfolio from "./components/Portfolio";

var nav = document.getElementById("nav");
var frontpage = document.getElementById("frontpage");
var aboutme = document.getElementById("aboutme");
var projects = document.getElementById("projects");

ReactDOM.render(<NavbarLayout />, nav);
ReactDOM.render(<Jumbotron />, frontpage);
ReactDOM.render(<About />, aboutme);
ReactDOM.render(<Portfolio />, projects)

