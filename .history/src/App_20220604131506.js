import './App.css';
import SideBar from './components/sidebars';
import Home from './pages/Home';

function App() {
  return (
    <div className = style = {{
      display:"flex",
      flexDirection: "row",
      backgroundColor:'blue',
      width: "100%",
    }}>
      <SideBar/>
     <Home/>
    </div>
  );
}

export default App;
