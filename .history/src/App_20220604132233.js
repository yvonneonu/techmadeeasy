import "./App.css";
import SideBar from "./components/sidebars";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <SideBar style={{
        flex
      }} />
      <Home />
    </div>
  );
}

export default App;
