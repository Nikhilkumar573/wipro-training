import UserStatus from "./UserStatus";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>User Account Panel</h1>
      <UserStatus userId={101} />
    </div>
  );
}

export default App;

