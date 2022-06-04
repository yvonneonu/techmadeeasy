import 
import "./App.css";
import SideBar from "./components/sidebars";
import Home from "./pages/Home";

function App() {

  const [page, setPage] = useState("home")
  return (
    <div className="App">
      <SideBar style={{
        flex:1
      }} />
      {}
      <Home />
    </div>
  );
}

export default App;
