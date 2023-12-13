import React from 'react'
import google from './Assets/img/google.jpg'
import signup from './Assets/img/signup.png'
import Navbar from './Components/Navbar'
import { useState } from 'react'
import validation from './LoginValidation.js'
const Login = () => {
    const[values,setValues]=useState(
        {
            email:'',
            password:''
        }
    )

    const [errors,setErrors]=useState({});
    const handleSubmit=(e)=>
    {
           e.preventDefault();
           setErrors(validation(values));


    }

    const handleInput=(e)=>
    {
        setValues(prev =>({...prev,[e.target.name]:[e.target.value]}))
    }
   

  return (<>
  <Navbar prop1="Back"/>
    <div class="big-container">

    <section class="container forms">
        <div class="image">
            <img src={signup} alt=""/>
        </div>
        <div class="form login">
            <div class="form-content">
                <header>Login</header>
                <form action="" onSubmit={handleSubmit}>
                    <div class="field input-field">
                        <input type="email" placeholder="Email" class="input"  onChange={handleInput} name="email"/>
                    </div>
                    <span class="display"><p>{errors.email}</p></span>
                    <div class="field input-field">
                        <input type="password" placeholder="Password" class="password"  onChange={handleInput} name="password"/>
                    </div>
                    <span class="display"><p>{errors.password}</p></span>

                    <div class="form-link">
                        <a href="#" class="forgot-pass">Forgot password?</a>
                    </div>
                    <div class="field button-field">
                        <button type='submit'>Login</button>
                    </div>
                </form>

                <div class="form-link">
                    <span>Don't have an account? <a href="#" class="link signup-link">Sign-Up</a></span>
                </div>
            </div>

            <div class="line"></div>

            <div class="media-options">
                <a href="#" class="field facebook">
                    <i class='bx bxl-facebook facebook-icon'></i>
                    <span>Login with Facebook</span>
                </a>
            </div>

            <div class="media-options">
                <a href="#" class="field google">
                    <img src={google} alt="" class="google-img"/>
                    <span>Login with Google</span>
                </a>
            </div>

        </div>

    </section>
</div>
</>
  )
}

export default Login