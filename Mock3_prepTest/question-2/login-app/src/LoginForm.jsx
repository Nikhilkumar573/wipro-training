import React, { useState, useRef } from "react";

function LoginForm() {

  
  const [username, setUsername] = useState("");

  
  const passwordRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const passwordValue = passwordRef.current.value;

    console.log("Username:", username);
    console.log("Password:", passwordValue);

    alert(`Login Successful!\nUsername: ${username}\nPassword: ${passwordValue}`);

    
    setUsername("");
    passwordRef.current.value = "";
  };

  return (
    <div style={{ 
      width: "300px",
      margin: "40px auto",
      padding: "20px",
      border: "1px solid #ccc",
      borderRadius: "8px"
    }}>

      <h2> Login Form</h2>
      
      <form onSubmit={handleSubmit}>

        {/* Controlled Component */}
        <div style={{ marginBottom: "12px" }}>
          <label>Username:</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        {/* Uncontrolled Component */}
        <div style={{ marginBottom: "12px" }}>
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter password"
            ref={passwordRef}
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button type="submit" style={{
          width: "100%",
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "black",
          color: "white",
          border: "none",
          borderRadius: "5px"
        }}>
          Login
        </button>

      </form>
    </div>
  );
}

export default LoginForm;
