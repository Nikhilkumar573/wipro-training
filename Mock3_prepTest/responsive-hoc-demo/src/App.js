import ResponsiveMessage from "./ResponsiveMessage";
import withWindowWidth from "./withWindowWidth";

const EnhancedResponsiveMessage = withWindowWidth(ResponsiveMessage);

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Responsive UI Demo</h1>
      <EnhancedResponsiveMessage />
    </div>
  );
}

export default App;
