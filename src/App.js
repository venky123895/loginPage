import './App.css';
import Home from './Components/Home';
import LoginPage from './Components/LoginPage';
import Navbar from './Components/Navbar';
import { useContext } from 'react';
import { myGlobalData } from './Components/Context';
function App() {
  const{isLoggedint}=useContext(myGlobalData)
  return (
    <div className="App">
      {
        isLoggedint ? <><Navbar/><Home/></> : <LoginPage/>
      }
    </div>
  );
}

export default App;
