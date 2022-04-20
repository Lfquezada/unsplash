/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import "./MainBody.scss";

function MainBody() {
  return (
    <div className="container">
      <div className="home_image">
        <div className="dark_overlay">
          <h1> Displash </h1>
          <body> The internet&apos;s source of <u>freely-usable images</u>. </body>
          <body> Powered by creators everywhere. </body>
          <div id="spacer_div" />
          <div id="spacer_div" />
          <input
            className="main_input"
            placeholder="Search free high-resolution photos"
          />
          <div id="spacer_div" />
          <body> Trending: <text className="light">flower, wallpapers, backgrounds, happy, love</text> </body>
          <div id="spacer_large_div" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
