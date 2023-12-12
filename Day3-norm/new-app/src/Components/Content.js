import React from 'react'
import '../Assets/Css/content.css'
import main_img from '../Assets/img/main-img.png';
import image1 from '../Assets/img/image1.png';
import image2 from '../Assets/img/image2.png';
import image3 from '../Assets/img/image3.png';
import add from '../Assets/img/add-image.png';

const Content = () => {
  return (
    <div class="main">
   <div class="contain">
    <div class="content">
        <h1 class="topic">NIKE</h1>
        <h1 class="air">AIR FORCE</h1>
        <span class="paragraph"><p>Keep playtime in every step with these 
            colourful kicks.Crossing hardwood comfort with flair this hoops
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
        <img src={main_img} alt=""/>
       </div>
   </div>

   <div class="product-list">
    <div class="product">
        <img src={image1}  alt=""/>
        <span class="add"><img src={add} alt=""/></span>
        <span class="title"><p>NIKE DUNK</p></span>
    </div>
    <div class="product">
        <img src={image2} alt=""/>
        <span class="add"><img src={add} alt=""/></span>
        <span class="title"><p>NIKE AIR</p></span>
    </div>
    <div class="product">
        <img src={image3} alt=""/>
        <span class="add"><img src={add} alt=""/></span>
        <span class="title"><p>NIKE CITY</p></span>
    </div>
   </div>
</div>
  )
}

export default Content