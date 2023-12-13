import React from 'react';
import '../Assets/css/Content.css'
import logo from '../Assets/img/newlogo.jpg'
const Content = () => {
  return (
    <div class="main">
   <div class="contain">
    <div class="content">
        <h1 class="topic">FREELANCER</h1>
        <h2 class="air">CONNECT TO PERFECTION</h2>
        <span class="paragraph"><p>empowering freelancers to achieve their goals and thrive in the world of freelancing. Whether you are a seasoned professional or just starting your freelance journey, we provide the tools and resources you need to succeed on your terms
        </p>
    </span>
    <span class="contact">
        <button>Contact Us</button>
        <span class="arrow">
        <i class='bx bxs-right-top-arrow-circle'></i>
    </span>
    </span>
    </div>
       <div class="image">
        <img  class="imag" src={logo} alt=""/>
       </div>
   
   </div>
</div>
  )
}

export default Content