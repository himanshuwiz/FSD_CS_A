import './App.css'
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/login' element= {<Login/>}></Route>
      <Route path='/login' element= {<Logout/>}></Route>
      <Route path='/login' element= {<Register/>}></Route>

    </Routes>
  )
}

export default App;