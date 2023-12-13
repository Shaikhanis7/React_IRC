import google from './Assets/img/google.jpg'
import login from './Assets/img/login.jpg'
import React from 'react'
import Navbar from './Components/Navbar'

    const Signin = () => {
      return (

      <>
      <Navbar prop1="Back"></Navbar>
        <section class="container forms">
             <div class="image">
            <img src={login} alt=""/>
        </div>
                <div class="form login">
                    <div class="form-content">
                        <header>Sign-Up</header>
                        <form action="#">
                            <div class="field input-field">
                                <input type="text" placeholder="Username" class="input"/>
                            </div>
    
                            <div class="field input-field">
                                <input type="email" placeholder="Email" class="input"/>
                            </div>
    
                            <div class="field input-field">
                                <input type="password" placeholder="Password" class="password"/>
                            </div>
    
                        
                            <div class="form-link">
                                <span><input type="checkbox" name="" id=""/>I agree to the Freelancer User Agreement and privacy Policy</span>
                            </div>
    
                            <div class="field button-field">
                                <button>SignIn</button>
                            </div>
                        </form>
    
                    </div>
    
                    <div class="line"></div>
    
                    <div class="media-options">
                        <a href="#" class="field facebook">
                            <i class='bx bxl-facebook facebook-icon'></i>
                            <span>Continue with Facebook</span>
                        </a>
                    </div>
    
                    <div class="media-options">
                        <a href="#" class="field google">
                            <img src={google} alt="" class="google-img"/>
                            <span>Continue with Google</span>
                        </a>
                    </div>
    
                </div>
    
            </section>
            </>
      )
    }
    


export default Signin