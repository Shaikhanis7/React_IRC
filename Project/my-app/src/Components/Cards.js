import React from 'react'
import '../Assets/css/cards.css'
// import '../Assets/Css/cards.css'
import imag1 from '../Assets/img/imag1.png'
// import shoe2 from '../Assets/img/shoe2.png'
// import shoe3 from '../Assets/img/shoe3.png'
// import shoe4 from '../Assets/img/shoe4.png'
// import shoe5 from '../Assets/img/shoe5.png'
// import shoe6 from '../Assets/img/shoe6.png'
// import shoe7 from '../Assets/img/shoe7.png'
// import shoe8 from '../Assets/img/shoe8.png'
const Cards = () => {
  return (
    <div class="wrapper">
        <h1>Our Services</h1>
        <div class="cols">
           
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src="" alt=""/>
                        <div class="inner">
                            <p>Graphic Designing</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹7499</p>
                        <p>Within 5 days</p>
                            <button class="buy-now-btn">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src="" alt="Adidas Ultraboost"/>
                        <div class="inner">
                            <p>Mobile App Development</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹11499</p>
                        <p>Within 8 days</p>
                            <button class="buy-now-btn">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src="" alt="Puma Running Shoes"/>
                        <div class="inner">
                            <p>Interior Designing</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹12499</p>
                        <p>Within 18 days</p>
                            <button class="buy-now-btn">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src="" alt="New Balance"/>
                        <div class="inner">
                            <p>Web development</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹9499</p>
                        <p>Within 9 days</p>
                            <button class="buy-now-btn">Get Service</button>
                        </div>
                    </div>
                </div>
            </div>
           
          
            


        </div>
    </div>
  )
}

export default Cards;