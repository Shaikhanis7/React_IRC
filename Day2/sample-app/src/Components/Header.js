import React from 'react'
import '../Assets/css/header.css'
function Header() {
  return (
    <nav>
    <a href="#" class="navbar-logo">NavBar</a>

    <div class="links">
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Login</a></li>
        </ul>
    </div>
    <div class="search-bar">
        <i class='bx bx-search-alt icon'></i>
      <input type="text" class="search-input" placeholder="Search..."></input>
    </div>
  </nav>
  )
}

export default Header