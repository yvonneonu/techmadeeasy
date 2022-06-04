import './App.css';
import SideBar from './components/sidebar';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <SideBar>
     <Home/>
    </div>
  );
}

export default App;
