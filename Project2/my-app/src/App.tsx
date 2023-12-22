import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import UserList from './Components/UserList';
import Signup from './Components/Signup';
import { Route, Routes } from 'react-router-dom';
function App() {
  

  return (
    <>
    <Routes>
    <Route  path='/'  element={<Home/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route  path='/signup'  element={<Signup/>}/>
    <Route  path='/dashboard'  element={<Dashboard/>}/>
    </Routes>
    {/* <Sidebar/> */}
      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Home/> */}
      {/* <Dashboard/> */}
      {/* <UserList/> */}
    </>
  )
}

export default App
