import React from 'react'
import 'remixicon/fonts/remixicon.css';
import {Link} from 'react-router-dom'
const Toolbar = ({openSidebar,prop}) => {
  return (
    <div class="navbar">
    <div className="tool-bar">
        <div className="burger" onClick={openSidebar}>
        <i className="ri-menu-line"></i>
        </div>
        <div className="title"><h1>Freelancer</h1></div>
    </div>
    <div className="nav-links">
         <ul>
            <li><Link to="/">{prop}</Link></li>
            <li><Link to="/login">Log-In</Link></li>
            <li><Link to="/signin">SignUp</Link></li>
         </ul>
    </div>
    </div>
  )
}

export default Toolbar