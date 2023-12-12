import React from 'react'
import '../Assets/Css/nav.css'
const Nav = () => {
  return (
    <nav class="navbar">
           <h1>Logo</h1>
           <ul>
            <li>
                <a href="">Home</a>
            </li>
            <li>
                <a href="">Man</a>
            </li>
            <li>
                <a href="">Women</a>
            </li>
            <li>
                <a href="">Kids</a>
            </li>
            <li>
                <a href="">Feature</a>
            </li>
           </ul>
           <div class="input_box">
               <i class='bx bx-search-alt icon  search_icon'></i>
           <input type="text" placeholder="search"></input>
        </div>
   </nav>
  )
}

export default Nav