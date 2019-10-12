import React, { Component } from "react";

class Flag extends Component {
  render() {
    const { country } = this.props;
    const countryURL = `https://www.countryflags.io/${country}/shiny/64.png`;
    return (
      <div>
        <img src={countryURL} alt="" className="country" width="26px" />
      </div>
    );
  }
}

export default Flag;
