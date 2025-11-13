import React from "react";
import { useFetch } from "./components/useFetch"; 

function App() {
  
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/users");

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <h2>User List</h2>
      {data && data.map(user => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}

export default App;
