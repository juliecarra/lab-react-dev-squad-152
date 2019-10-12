import React, { Component } from "react";
import "../App.css";

class Navbar extends Component {
  render() {
    const navbarImage =
      "https://mdbootstrap.com/img/svg/hamburger7.svg?color=FFFFFF";

    const navbarBurger = {
      height: "40px",
      border: "1px solid #FFF",
      padding: "12px"
    };

    return (
      <div className="Navbar">
        <div>Dev Squad #152</div>
        <img src={navbarImage} alt="" style={navbarBurger} />
      </div>
    );
  }
}

export default Navbar;
