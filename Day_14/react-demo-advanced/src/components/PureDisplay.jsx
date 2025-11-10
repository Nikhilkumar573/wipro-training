import React, { PureComponent } from "react";

class PureDisplay extends PureComponent {
  render() {
    console.log("PureDisplay rendered");
    return <h3>{this.props.message}</h3>;
  }
}

export default PureDisplay;
