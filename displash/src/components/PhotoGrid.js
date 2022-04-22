/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import "./PhotoGrid.scss";

function PhotoGrid() {
  return (
    <div>
      <div className="container_photo_grid">
        <div className="test_pic">
          <div id="spacer_large_div" />
        </div>
        <div className="test_pic">
          <div id="spacer_large_div" />
        </div>
        <div className="test_pic">
          <div id="spacer_large_div" />
        </div>
      </div>
    </div>
  );
}

export default PhotoGrid;
