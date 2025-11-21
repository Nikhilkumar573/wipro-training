import React, { Component } from "react";
import PropTypes from "prop-types";

class UserStatus extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      status: "Fetching user status..."
    };
  }

  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ status: "Active User" });
    }, 2000);
  }

  render() {

    
    const boxStyle = {
      border: "2px solid #0077ff",
      padding: "15px",
      borderRadius: "10px",
      width: "300px",
      margin: "30px auto",
      backgroundColor: "#f5f5f5",
      textAlign: "center",
      fontFamily: "Arial"
    };

    const textStyle = {
      fontSize: "18px",
      fontWeight: "bold",
      color: "#333"
    };

    return (
      <div style={boxStyle}>
        <h3>User ID: {this.props.userId}</h3>
        <p style={textStyle}>{this.state.status}</p>
      </div>
    );
  }
}


UserStatus.propTypes = {
  userId: PropTypes.number.isRequired
};

export default UserStatus;
