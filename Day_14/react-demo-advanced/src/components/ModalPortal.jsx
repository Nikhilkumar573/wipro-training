import React from "react";
import ReactDOM from "react-dom";

function ModalPortal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={styles.overlay}>
      <div style={styles.modal}>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.body // portal target
  );
}

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    textAlign: "center"
  }
};

export default ModalPortal;
