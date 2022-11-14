import logo from './logo.svg';
import './App.css';
import Regist from './components/regist/reg';
import { AddUser, Login } from './components';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

function App() {
  return (
    <Router>
       <Routes>
        <Route path='/register' exact element={<AddUser/>}/>
        <Route path='/login' exact element={<Login/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
