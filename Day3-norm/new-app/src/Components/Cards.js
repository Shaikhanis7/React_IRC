import React from 'react'
import '../Assets/Css/cards.css'
import shoe1 from '../Assets/img/shoe1.png'
import shoe2 from '../Assets/img/shoe2.png'
import shoe3 from '../Assets/img/shoe3.png'
import shoe4 from '../Assets/img/shoe4.png'
import shoe5 from '../Assets/img/shoe5.png'
import shoe6 from '../Assets/img/shoe6.png'
import shoe7 from '../Assets/img/shoe7.png'
import shoe8 from '../Assets/img/shoe8.png'
const Cards = () => {
  return (
    <div class="wrapper">
        <h1>Latest Products</h1>
        <div class="cols">
           
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe1} alt="Nike Air Max"/>
                        <div class="inner">
                            <p>Nike Air Max</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹7499</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe2} alt="Adidas Ultraboost"/>
                        <div class="inner">
                            <p>Nike Hustle</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹4499</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe3} alt="Puma Running Shoes"/>
                        <div class="inner">
                            <p>Nike Impact </p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹8499</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe4} alt="New Balance"/>
                        <div class="inner">
                            <p>Nike Elevate</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹5099</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe5} alt="New Balance"/>
                        <div class="inner">
                            <p>Nike Vomero 6</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹8999</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe6} alt="New Balance"/>
                        <div class="inner">
                            <p>Nike Winflow 9</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹8699</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe7} alt="New Balance"/>
                        <div class="inner">
                            <p>Nike Skate 16</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                        <h1>Price</h1>
                            <p>₹7099</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col" ontouchstart="this.classList.toggle('hover');">
                <div class="container">
                    <div class="front">
                        <img src={shoe8} alt="New Balance"/>
                        <div class="inner">
                            <p>Nike Dunk 12</p>
                        </div>
                    </div>
                    <div class="back">
                        <div class="inner">
                            <h1>Price</h1>
                            <p>₹2500</p>
                            <button class="buy-now-btn">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Cards