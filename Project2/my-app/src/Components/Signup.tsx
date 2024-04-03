import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import sigin from '../assets/img/Sign.png';
import '../assets/css/Signup.css';
import { FcGoogle } from "react-icons/fc";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface User {
  name: string;
  password: string;
  email: string;
}

const Signup: React.FC = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState<User>({
    name: "",
    password: "",
    email: ""
  });

  const { name, password, email } = user;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/signup", user);
      // toast.success('Signup successful');
      console.log("Hello");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error while submitting form:", error);
      // Handle error (e.g., display error message)
    }
  }

  return (
    <>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-5 card bg-black">
            <div className="row">
              <img src={sigin} alt="no image" className="img-fluid mt-5" />
            </div>
            <div className="row text-white text-center mt-3">
              <h2>Welcome to Freelancer</h2>
            </div>
            <div className="row text-white text-center mt-2 pb-5">
              <p>Meet With Experienced Freelancer in this platform</p>
            </div>
            <div className="row pb-5"></div>
          </div>
          <div className="col-5 card">
            <div className="row text-center pt-3">
              <h2>Hello</h2>
            </div>
            <div className="row text-center">
              <p>Sign-up to explore the Freelancer</p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="row d-flex justify-content-center">
                <input type="text" className="form-control bg-light input-group" placeholder='UserName' style={{width: '95%'}} name="name" value={name} onChange={onInputChange} required />
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <input type="text" className="form-control bg-light input-group" placeholder='Email Address' style={{width: '95%'}} name="email" value={email} onChange={onInputChange} required />
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <input type="password" className="form-control bg-light input-group" placeholder='Password' style={{width: '95%'}} name="password" value={password} onChange={onInputChange}required />
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <div className="input-group mb-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input type="checkbox" className='form-check-input' id='formCheck' />
                    <label htmlFor="formCheck" className='form-check-label text-secondary'>Accept Terms and Condition of freelancer</label>
                  </div>
                </div>
              </div>
              <div className="row d-flex justify-content-center">
                <button type="submit" className='btn btn-lg bg-black text-white fs-6' style={{width: '95%'}}>Sign Up</button>
              </div>
            </form>
            <div className="row mt-4">
              <div className='horizontal'>
                <p className='text-center'><span>Or</span></p>
              </div>
            </div>
            <div className="row text-center">
              <h4>SignUp With</h4>
            </div>
            <div className="d-flex justify-content-center gap-4 mt-2">
              <div className=""><FcGoogle  size={30}/></div>
              <div className=" "><FaFacebook className="text-primary"  size={30}/></div>
              <div className=" "><RiTwitterXLine size={28}/></div>
            </div>
            <div className="row text-center mt-3 pb-2">
              <p>Already have an account?<a href="">Login</a></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup;
