import React from "react";
import "./NavBar.css";
import right_arrow from "../imgs/right_arrow.png"

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar">
                <button type="button" class="nav_button_selected"> Editorial </button>
                <div id="spacer_div" />
                <div className="__bar"></div>
                <ul className="nav_list">
                    <button type="button" class="nav_button"> Color of Water </button>
                    <button type="button" class="nav_button"> Current Events </button>
                    <button type="button" class="nav_button"> Wallpapers </button>
                    <button type="button" class="nav_button"> 3D Renders </button>
                    <button type="button" class="nav_button"> Textures & Patterns </button>
                    <button type="button" class="nav_button"> Experimental </button>
                    <button type="button" class="nav_button"> Architecture </button>
                    <button type="button" class="nav_button"> Nature </button>
                    <button type="button" class="nav_button"> Business & Work </button>
                    <button type="button" class="nav_button"> Fashion </button>
                </ul>
                <div id="spacer_div" />
                <img id="right_arrow" src={right_arrow} alt="right_arrow" />
            </nav>
        );
    }
}