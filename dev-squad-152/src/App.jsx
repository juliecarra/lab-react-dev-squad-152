import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import SectionStudents from "./components/SectionStudents";
import SectionTopicsToRecap from "./components/SectionTopicsToRecap";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <SectionStudents />
        </div>
        <SectionTopicsToRecap />
      </div>
    );
  }
}

export default App;
