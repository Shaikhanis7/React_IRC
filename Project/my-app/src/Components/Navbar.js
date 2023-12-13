
import React, { useState } from'react';
import Toolbar from './Toolbar';
import Slibar from './Slibar';
import Backdrop from './Backdrop';
const Navbar = ({prop1}) => {

    const[sidebar,setSidebar]=useState(false);
    const toggleSlider=()=>
    {
          setSidebar((!sidebar))
    }
  return (
    <div>
        <Toolbar  openSidebar={toggleSlider}  prop={prop1}/>
      <Backdrop  sidebar={sidebar}  closeSidebar={toggleSlider}/>
      <Slibar sidebar={sidebar}  />
    </div>
  )
}

export default Navbar