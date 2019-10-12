import React, { Component } from "react";

class PostIt extends Component {
  render() {
    //console.log(this.props.children);
    const { children, color } = this.props;
    //Background color for each PostIt
    const colorPostIt = { backgroundColor: color };

    return (
      <div className="PostIt" style={colorPostIt}>
        <p>{children}</p>
      </div>
    );
  }
}

export default PostIt;
