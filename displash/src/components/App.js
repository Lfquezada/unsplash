/* eslint-disable react/prop-types */
import React from "react";
import "animate.css";
import "./App.css";
import Header from "./Header";
import NavBar from "./NavBar";


export default class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <img id="pic_home" src={"https://images.unsplash.com/photo-1633507170063-253c395b532c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"} alt="Displash home" />
      </div>
    );
  }
}
