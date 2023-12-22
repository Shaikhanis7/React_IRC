import '../assets/css/Login.css';
import sigin from '../assets/img/login2.png';
import { FaGoogle } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { RiTwitterXLine } from 'react-icons/ri';
import { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const navigateHome=()=>
    {
        navigate('/');
    }
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [usernameError, setUsernameError] = useState('');
  const[Error,setError]=useState(false);
  const [passwordError, setPasswordError] = useState('');
  const notify = () => toast.success('Login successful!');
  const handleLogin = () => {
    // e.preventDefault();
    setUsernameError('');
    setPasswordError('');
    var flag1=true;
    var flag2=true;
    var flag3=true;
    var flag4=true;
    if (username.trim() === '') {
        setUsernameError('Please enter a username');
      setError(true); 
      flag1=false;
    }
    

    
    const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z]).{6,}$/;
    if (!passwordRegex.test(password.trim())) {
        setPasswordError('Password must contain at least one number and one alphabet character');
        setError(true);
        flag3=false;
    }
    if (password.trim().length < 6) {
        setPasswordError('Password must be at least 6 characters long');
        setError(true);
        flag2=false;
    }
    
    if (password.trim() === '') {
        setPasswordError('Please enter a Password');
        setError(true);
        flag4=false;
    }
    

        if (flag1 && flag2 && flag3 && flag4) {
          setError(false);
          notify();
    
          const timer = setTimeout(() => {
            navigateHome();
          }, 2200);
          return () => clearTimeout(timer);
        }
    
    
     
    
  };

  return (
    <>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-5 card bg-black">
            <div className="row">
              <img src={sigin} alt="no image" className="img-fluid mt-5" />
            </div>
            <div className="row text-white text-center mt-3">
              <h2>Be Verified</h2>
            </div>
            <div className="row text-white text-center mt-2 pb-5">
              <p>Join experienced Freelancers in this platform</p>
            </div>
            <div className="row pb-5"></div>
          </div>

          {Error?(
          <div className="col-5 card pt-1">
           
            <div className="row text-center pt-1">
              <h2>Hello</h2>
            </div>
            <div className="row text-center">
              <p>We are happy to see you back</p>
            </div>
            <div className="row d-flex justify-content-center mt-2">
              <input
                type="text"
                className="form-control bg-light input-group"
                placeholder="UserName"
                style={{ width: '95%' }}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
            </div>
            <div className="row d-flex justify-content-center mt-1">
              <input
                type="password"
                className="form-control bg-light input-group"
                placeholder="Password"
                style={{ width: '95%' }}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
            </div>
            <div className="row d-flex justify-content-center mt-1">
              <div className="input-group mb-1 d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="formCheck"
                    onChange={() => setRememberMe(!rememberMe)}
                  />
                  <label htmlFor="formCheck" className="form-check-label text-secondary">
                    Remember Me
                  </label>
                </div>
                <div className="forgot">
                  <a href="">Forgot Password?</a>
                </div>
              </div>
            </div>
            <div className="row d-flex justify-content-center">
              <input
                type="submit"
                className="btn btn-lg bg-black text-white fs-6"
                value="Login"
                style={{ width: '95%' }}
                onClick={handleLogin}
              />
            </div>
            <div className="row mt-2">
              <div className="horizontal">
                <p className="text-center">
                  <span>Or</span>
                </p>
              </div>
            </div>
            <div className="row text-center">
              <h4>Login With</h4>
            </div>

            <div className="d-flex justify-content-center gap-4 mt-2">
              <div className="">
                <FcGoogle size={30} />
              </div>
              <div className=" ">
                <FaFacebook className="text-primary" size={30} />
              </div>
              <div className=" ">
                <RiTwitterXLine size={28} />
              </div>
            </div>

            <div className="row text-center mt-3 pb-2">
              <p>
                Don't have an accout?<a href="">SignUp</a>
              </p>
            </div>
          </div>):(<>
            <div className="col-5 card pt-3">
           
           <div className="row text-center pt-3">
             <h2>Hello</h2>
           </div>
           <div className="row text-center">
             <p>We are happy to see you back</p>
           </div>
           <div className="row d-flex justify-content-center mt-4">
             <input
               type="text"
               className="form-control bg-light input-group"
               placeholder="UserName"
               style={{ width: '95%' }}
               onChange={(e) => setUsername(e.target.value)}
               required
             />
             {usernameError && <p style={{ color: 'red' }}>{usernameError}</p>}
           </div>
           <div className="row d-flex justify-content-center mt-3">
             <input
               type="password"
               className="form-control bg-light input-group"
               placeholder="Password"
               style={{ width: '95%' }}
               onChange={(e) => setPassword(e.target.value)}
               required
             />
             {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
           </div>
           <div className="row d-flex justify-content-center mt-3">
             <div className="input-group mb-3 d-flex justify-content-between">
               <div className="form-check">
                 <input
                   type="checkbox"
                   className="form-check-input"
                   id="formCheck"
                   onChange={() => setRememberMe(!rememberMe)}
                 />
                 <label htmlFor="formCheck" className="form-check-label text-secondary">
                   Remember Me
                 </label>
               </div>
               <div className="forgot">
                 <a href="">Forgot Password?</a>
               </div>
             </div>
           </div>
           <div className="row d-flex justify-content-center">
             <input
               type="submit"
               className="btn btn-lg bg-black text-white fs-6"
               value="Login"
               style={{ width: '95%' }}
               onClick={handleLogin}
             />
           </div>
           <div className="row mt-4">
             <div className="horizontal">
               <p className="text-center">
                 <span>Or</span>
               </p>
             </div>
           </div>
           <div className="row text-center">
             <h4>Login With</h4>
           </div>

           <div className="d-flex justify-content-center gap-4 mt-2">
             <div className="">
               <FcGoogle size={30} />
             </div>
             <div className=" ">
               <FaFacebook className="text-primary" size={30} />
             </div>
             <div className=" ">
               <RiTwitterXLine size={28} />
             </div>
           </div>

           <div className="row text-center mt-3 pb-4">
             <p>
               Don't have an accout?<a href="">SignUp</a>
             </p>
           </div>
         </div></>)}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={2000} 
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Login;
