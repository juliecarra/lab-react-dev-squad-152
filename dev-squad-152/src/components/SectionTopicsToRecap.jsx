import React, { Component } from "react";
import PostIt from "./PostIt";

class SectionTopicsToRecap extends Component {
  render() {
    return (
      <div>
        <h1 className="SectionTopicsToRecap">Topics To Recap</h1>
        <div className="postit__container">
          <PostIt color="#32c3ff">Debugging Tool</PostIt>

          <PostIt color="#1e2434">APIs</PostIt>
          <PostIt color="#32c3ff">Mapbox</PostIt>
        </div>
      </div>
    );
  }
}

export default SectionTopicsToRecap;
