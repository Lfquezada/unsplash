/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from "react";
import "animate.css";
import "./App.scss";
import Header from "./Header";
import NavBar from "./NavBar";
import MainBody from "./MainBody";
import PhotoGrid from "./PhotoGrid";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <NavBar />
        <MainBody />
        <PhotoGrid />
      </div>
    );
  }
}
