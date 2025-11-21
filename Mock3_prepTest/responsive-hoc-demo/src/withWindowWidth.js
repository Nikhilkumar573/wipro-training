import React, { useState, useEffect } from "react";

// Higher Order Component
function withWindowWidth(WrappedComponent) {

  return function EnhancedComponent(props) {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, []);

    return <WrappedComponent windowWidth={width} {...props} />;
  };
}

export default withWindowWidth;
