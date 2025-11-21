import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserDetails from "./UserDetails";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <h1>ShopNow Admin Panel</h1>

        <nav style={{ marginBottom: "10px" }}>
          <Link to="/users/1" style={{ marginRight: "10px" }}>View User 1</Link>
          <Link to="/users/2" style={{ marginRight: "10px" }}>View User 2</Link>
          <Link to="/users/3">View User 3</Link>
        </nav>

        <Routes>
          <Route path="/users/:id" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


