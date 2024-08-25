import {BrowserRouter,Route, Routes} from'react-router-dom';
import './App.css';
import Signup from './Components/Signup/Signup';
import Login from './Components/Login/Login';
import LandingPage from './Components/LandingPage/LandingPage';
import HomePage from './Components/Home/HomePage';
//import CAdvisor from './Components/CAdvisor/cAdvisor';
//import ResponseTimes from './Components/ResponseTimes/ResponseTimes';


function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
            <Route index element = {<LandingPage/>}/>
            <Route path = "/signup" element = {<Signup/>}/>
            <Route path = "/login" element = {<Login/>}/>
            <Route path = "/Home" element = {<HomePage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
