≈
import SideBar from './components/sidebars';
import Home from './pages/Home';
style = {{
  display:"flex",
  flexDirection: "row",
  backgroundColor:'blue',
  width: "100%",
}}
function App() {
  return (
    <div className = "App">
      <SideBar/>
     <Home/>
    </div>
  );
}

export default App;
