
import React, { useState } from'react';
import Toolbar from './Components/Toolbar';
import Slibar from './Components/Slibar';
import './style.css'
import Backdrop from './Components/Backdrop';
import Login from './Login';
import Navbar from './Components/Navbar';
import Signin from './Signin';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './Components/Home';

function App() {
 
  return (

   
    <div className="App">
      {/* <Navbar/>
      <Signin/> */}
      {/* <Login/> */}
       
      
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signin" element={<Signin/>} />
        <Route path="/login"  element={<Login/>} />
      </Routes>
    </Router>
 </div>


  );
}

export default App;
