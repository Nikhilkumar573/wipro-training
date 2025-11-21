import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { id } = useParams(); 
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!user) {
    return <h3>Loading user information...</h3>;
  }

  return (
    <div style={{
      border: "2px solid #ccc",
      padding: "20px",
      width: "300px",
      marginTop: "20px",
      borderRadius: "10px"
    }}>
      <h2>User Details</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}

export default UserDetails;
