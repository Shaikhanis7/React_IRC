import React from 'react';
import Home from '../Pages/Home';
import About from '../Pages/About';
import {Link} from 'react-router-dom';

const Nav = () => {
  return (
    <div>
        <ul>
            <li>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </li>
        </ul>
    </div>
  )
}

export default Nav