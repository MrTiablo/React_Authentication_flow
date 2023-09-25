
import { Route, Routes } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Components/Login';
import Register from './Components/Register';
import { Lcontext } from './Context/Context';
import { useState } from 'react';
import Home from './Components/Home';

function App() {
const [register,setRegister]=useState([])
  return (
    <>
      <div>
        <Lcontext.Provider value={{register,setRegister}}>
        <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/home' element={<Home/>}/>
        </Routes>
        </Lcontext.Provider>
      </div>
     
    </>
  )
}

export default App
