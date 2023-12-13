import React from 'react'
import {Link} from 'react-router-dom'
const Slibar = ({sidebar}) => {
  return (
    <div className={sidebar ? "sidebar sidebar--open":"sidebar"}>
        <Link to="/"><li><i class="ri-home-line"></i>Home</li></Link>
        <Link to="/login"><li><i class="ri-login-circle-line"></i>Signup</li></Link>
        <li><i class="ri-user-line"></i>User</li>
        <li><i class="ri-phone-line"></i>Contact Us</li>
        <li><i class="ri-information-line"></i>About Us</li>
    </div>
  )
}

export default Slibar