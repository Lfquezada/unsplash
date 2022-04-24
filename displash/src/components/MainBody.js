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
          <div id="spacer_large_div_body" />
          <div id="gridded_div">
            <div className="class_left">
              <a href="https://unsplash.com/photos/Yxf4Yj0IjTU" className="custom_a_zoom"> Photo of the Day </a>
              <text className="light">by</text>
              <a href="https://unsplash.com/@luisferquez" className="custom_a"> Luis </a>
            </div>
            <div className="class_center">
              <text className="light">Read more about the </text>
              <a href="https://unsplash.com/license" className="custom_a">Displash License</a>
            </div>
            <div className="class_right">
              <img id="sqs_logo" src="https://images.unsplash.com/file-1606177908946-d1eed1cbe4f5image" alt="SQS_SPACE" />
              <br />
              <text className="light">Start your website with Squarespace today.</text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
