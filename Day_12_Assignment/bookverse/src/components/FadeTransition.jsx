import React from "react";
import { CSSTransition } from "react-transition-group";
import "../App.css";

const FadeTransition = ({ children }) => (
  <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
    <div>{children}</div>
  </CSSTransition>
);

export default FadeTransition;
