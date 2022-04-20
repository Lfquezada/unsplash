import React from "react";
import "./Header.css";
import logo from "../imgs/logo.png"
import menu_logo from "../imgs/menu_logo.png"

export default class Header extends React.Component {
    render() {
        return (
            <header id="displash_header">
                <nav className="navver">
                <img id="home_logo" src={logo} alt="Displash home" />
                <div id="spacer_div" />
                <input id="custom_input"
                    placeholder="Search free high-resolution photos"
                />
                <ul className="nav_list">
                    <button type="button"> Explore </button>
                    <button type="button"> Advertise </button>
                    <button type="button"> Blog </button>
                </ul>
                <div className="__bar"></div>
                <div id="spacer_div" />
                <div className="button_box">
                    <button type="button">Log in / Sign up</button>
                </div>
                <div className="button_box">
                    <button type="button" class="button_submit">Submit a photo</button>
                </div>
                <div id="spacer_div" />
                <img id="menu_logo" src={menu_logo} alt="Menu" />
                </nav>
            </header>
        );
    }
}