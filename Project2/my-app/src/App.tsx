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
import { AuthProvider } from './Components/AuthContext';
import FreelancerForm from './Components/FreelancerForm.';
import FreelancerTable from './Components/FreelancerTable';
import FreelancerCard from './Components/FreelancerCard';
import ActionAreaCard from './Components/ActionAreaCard';
import ActionAreaCardComponents from './Components/ActionAreaCardContainer';
import FreelancerPage from './Components/FreelancerPage';
import FreelancerList from './Components/FreelancerList';
function App() {
  

  return (
    <>
    {/* <AuthProvider>
    <Routes>
    <Route  path='/'  element={<Home/>}/>
    <Route  path='/login'  element={<Login/>}/>
    <Route  path='/signup'  element={<Signup/>}/>
    <Route  path='/dashboard'  element={<Dashboard/>}/>
     </Routes> */}
    {/* <Sidebar/>  
      <Login/> 
    <Signup/> 
       <Home/>
      <Dashboard/>
      <UserList/> */}
      {/* </AuthProvider> */}
      {/* <FreelancerCard name={'john'} description={'how he is '} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDdXmgMnXq-GKJzcVsyDG2QDmQfs2DvfRGzSRDOGF0W-kwssaSzh_TTaOK_g&s'}/> */}
      {/* <ActionAreaCardComponents/> */}
      {/* <FreelancerTable/> */}
      {/* <FreelancerForm/>/ */}
    {/* <FreelancerPage/>
     */}
     <FreelancerList/>
    </>
  )
}

export default App
