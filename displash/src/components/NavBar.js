/* eslint-disable react/prefer-stateless-function */
import React from "react";
import "./NavBar.scss";
import rightArrow from "../imgs/right_arrow.png";

export default class Header extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <button type="button" className="nav_button_selected"> Editorial </button>
        <div id="spacer_div" />
        <div className="__bar" />
        <ul className="nav_list">
          <button type="button" className="nav_button"> Color of Water </button>
          <button type="button" className="nav_button"> Current Events </button>
          <button type="button" className="nav_button"> Wallpapers </button>
          <button type="button" className="nav_button"> 3D Renders </button>
          <button type="button" className="nav_button"> Textures & Patterns </button>
          <button type="button" className="nav_button"> Experimental </button>
          <button type="button" className="nav_button"> Architecture </button>
          <button type="button" className="nav_button"> Nature </button>
          <button type="button" className="nav_button"> Business & Work </button>
          <button type="button" className="nav_button"> Fashion </button>
          <button type="button" className="nav_button"> Film </button>
          <button type="button" className="nav_button"> People </button>
          <button type="button" className="nav_button"> Interiors </button>
          <button type="button" className="nav_button"> Street </button>
        </ul>
        <div id="spacer_div" />
        <img id="right_arrow" src={rightArrow} alt="right_arrow" />
      </nav>
    );
  }
}
