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
import Jumbotron from "./components/Jumbotron"

var nav = document.getElementById("nav");
var frontpage = document.getElementById("frontpage");

ReactDOM.render(<NavbarLayout />, nav);
ReactDOM.render(<Jumbotron />, frontpage);
