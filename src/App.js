import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Route,Routes } from "react-router-dom";
import Home from './Components/Home';
import SideBar from './Components/SideBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
        <Route path='/' element={<Home/>}></Route>
        
        </Routes>
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;
