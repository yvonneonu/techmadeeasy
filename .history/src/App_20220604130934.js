import './App.css';
import SideBar from './components/sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App" style = {{
      display:"flex",
      flexDirection: "row",
      backgroundColor:'blue',
      width: 100%;
    }}>
      <SideBar/>
     <Home/>
    </div>
  );
}

export default App;
