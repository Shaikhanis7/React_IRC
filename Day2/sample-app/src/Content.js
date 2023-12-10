import React from 'react'
import './css/content.css'
function Content() {
  return (
    <div className="content">
    <div className="login">
            <div className="login__content">
                <div className="login__forms">
                    <form action="" className="login__registre" id="login-in">
                        <h1 className="login__title">Sign-In</h1>
    
                        <div className="login__box">
                            <i className='bx bx-user login__icon'></i>
                            <input type="text" placeholder="Username" className="login__input"></input>
                        </div>
    
                        <div className="login__box">
                            <i className='bx bx-lock-alt login__icon'></i>
                            <input type="password" placeholder="Password" className="login__input"></input>
                        </div>

                        <div className="btn">
                            <button>Sign-In</button>
                        </div>
                        <div className="forgot">
                        <a href="#" className="login__forgot">Forgot password?</a>
                    </div>

            

                        <div className="sign-up">
                            <span className="login__account">Don't have an Account ?</span>
                            <span className="login__signin" id="sign-up"> <a href="">Sign Up</a></span>
                        </div>
                    </form>

            </div>
        </div>
        </div>
        </div>
  )
}

export default Content