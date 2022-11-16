import logo from './logo.svg';
import './App.css';
import Regist from './components/regist/reg';
import { AddUser, Login } from './components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import HomePageUser from './pages/HomePageUser';
import AboutPageUser from './pages/AboutPageUser';
import AboutPageAdmin from './pages/AboutPageAdmin';
import HomePageAdmin from './pages/HomePageAdmin';
import LandingPage from './pages/LandingPage';
import AboutPageLanding from './pages/AboutPageLanding';


function App() {
  return (
   <>
    <Router>
       <Routes>
        <Route path='/register' exact element={<AddUser/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path="/" element={<LandingPage />}/>
        <Route path="/homepageuser" element={<HomePageUser />}/>
        <Route path="/homepageadmin" element={<HomePageAdmin />}/>
        <Route path="/aboutpageuser" element={<AboutPageUser />}/>
        <Route path="/aboutpageadmin" element={<AboutPageAdmin />}/>
        <Route path="/aboutpagelanding" element={<AboutPageLanding />}/>


      </Routes>
    </Router>
    </>
  );
}

export default App;
