/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import "./MainBody.scss";

function MainBody() {
  return (
    <div className="container">
      <div className="home_image">
        <div className="dark_overlay">
          <h1> Displash </h1>
          <body> The internet&apos;s source of <u><a href="https://unsplash.com/license" className="custom_a">freely-usable images</a></u>. </body>
          <body> Powered by creators everywhere. </body>
          <div id="spacer_div" />
          <div id="spacer_div" />
          <input
            className="main_input"
            placeholder="Search free high-resolution photos"
          />
          <div id="spacer_div" />
          <body className="body_small"> Trending:
            <a href="https://unsplash.com/images/nature/flower" className="custom_a"> flower</a>,
            <a href="https://unsplash.com/wallpapers" className="custom_a"> wallpapers</a>,
            <a href="https://unsplash.com/backgrounds" className="custom_a"> backgrounds</a>,
            <a href="https://unsplash.com/images/feelings/happy" className="custom_a"> happy</a>,
            <a href="https://unsplash.com/images/feelings/love" className="custom_a"> love </a>
          </body>
          <div id="spacer_large_div" />
          <body className="body_left">
            <a href="https://unsplash.com/photos/oeAcCi49Blg" className="custom_a_zoom"> Photo of the Day </a>
            <text className="light">by</text>
            <a href="https://unsplash.com/@luisferquez" className="custom_a"> Luis </a>
            <body className="body_center">
              <text className="light">Read more about the </text>
              <a href="https://unsplash.com/license" className="custom_a">Displash License</a>
            </body>
          </body>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
