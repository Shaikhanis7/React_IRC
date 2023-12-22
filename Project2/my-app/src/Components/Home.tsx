
import { MdNightsStay } from 'react-icons/md';
import { IoIosHome } from 'react-icons/io';
import { GiHamburgerMenu } from "react-icons/gi";
import React, { useState } from 'react';
import { Container, Row, Col, Button, Offcanvas } from 'react-bootstrap';
import { RxCross1 } from "react-icons/rx";
import frontimg from '../assets/img/first.png'
import { FaHtml5 } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { DiHtml53DEffects } from "react-icons/di";
import { MdMoreHoriz } from "react-icons/md";
import { MdPostAdd } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { MdOutlinePayment } from "react-icons/md";
import { Link } from 'react-router-dom';
import { CiPhone } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md"

const Home = () => {

  const[login,setlogin]=useState(false);
  const toggleLog=()=>
  {
    setlogin(!login);
    
  }
   const[side,setSide]=useState(true);

   const toggleSidePanel=()=>
   {
      setSide(!side);
   }
  return (
         <>

    
         
             <nav className="bg-white m-0 p-0 d-flex flex-row w-100 justify-content-between p-2 m-2">
               <div className="name d-inline-block">
                <h2>Freelancer</h2>
               </div>
               <div className="nav-links d-inline-block mt-1 me-5 pe-5">
                 <ul className="d-flex gap-5 ">
                    <li className="list-unstyled d-inline-block">
                          <a href="">Hire Freelancers</a>
                    </li>
                    <li className="list-unstyled d-inline-block">
                          <a href="">Project</a>
                    </li>
                    <li onClick={toggleLog} className="list-unstyled d-inline-block">
                    <Link to='/login' >Login</Link>
                    </li>
                    <li className="list-unstyled d-inline-block">
                    <Link to='/signup'>SignUp</Link>
                    </li>
                 </ul>
               </div>

               <div className="ham_burger me-4">
               <GiHamburgerMenu size={25} onClick={toggleSidePanel}  className="icon" />
               </div>
             </nav>

            <div className="container container-fluid m-2 w-100">
                  <div className="row">
                    <div className="col-6 mt-3">
                        <div className="row mt-5 ms-2">
                            <h1 className='text-center mt-5'>Discover the world top creaters</h1>
                        </div>
                        <div className="row mt-3 ms-2">
                        <p className='text-center'>Empowering freelancers to achieve their goals and thrive in the world of freelancing. Whether you are a seasoned professional or just starting your freelance journey, we provide the tools and resources you need to succeed on your terms
        </p>
                        </div>
                    </div>
                    <div className="col-6 d-flex justify-content-center align-items-center">
                        <div className="img d-inline-block  ms-5">
                        <img src={frontimg} alt="" />
                        </div>
                    </div>
                  </div>
            </div>

            <div className="container"><div className="row">
                <div className="col">
                    </div><h1 className='text-center findtop'>Find Top Programming & Development Freelancers
</h1></div></div>

                  <div className="container-fluid d-flex justify-content-center align-items-center">
                    <div className="container mt-4">
                        <div className="row ms-4 d-flex justify-content-center gap-3">
                            <div className="col-3 card shadow ">
                                <div className="row mt-3">
                                   <FaHtml5 size={60}/>
                                </div>
                                <div className="row">
                                    <h3 className='text-center'>Web Development & Design</h3>
                                </div>
                                <div className="row">
                                    <p className='text-center'>272,322 Freelancers</p>
                                </div>
                            </div>
                            <div className="col-3 card shadow ">
                                <div className="row mt-3">
                                   <FaMobileAlt size={60}/>
                                </div>
                                <div className="row">
                                    <h3 className='text-center mt-4'>Apps and Mobile</h3>
                                </div>
                                <div className="row">
                                    <p className='text-center'>172,286 Freelancers</p>
                                </div>
                            </div>
                            <div className="col-3 card shadow ">
                                <div className="row mt-3">
                                   <FaLaptopCode size={55}/>
                                </div>
                                <div className="row">
                                    <h3 className='text-center mt-1'>Programming & Software</h3>
                                </div>
                                <div className="row">
                                    <p className='text-center'>272,322 Freelancers</p>
                                </div>
                            </div>
                           </div>
                        <div className="row ms-4 d-flex justify-content-center gap-3 mt-2">
                            <div className="col-3 card shadow ">
                                <div className="row mt-3">
                                   <FaDatabase size={60}/>
                                </div>
                                <div className="row">
                                    <h3 className='text-center mt-1'>Database Design & Administraion</h3>
                                </div>
                                <div className="row">
                                    <p className='text-center'>245,312 Freelancers</p>
                                </div>
                            </div>
                            <div className="col-3 card shadow ">
                                <div className="row mt-3">
                                   <DiHtml53DEffects size={60}/>
                                </div>
                                <div className="row">
                                    <h3 className='text-center mt-1'>Graphic Designing & 3D Modeling</h3>
                                </div>
                                <div className="row">
                                    <p className='text-center'>256,686 Freelancers</p>
                                </div>
                            </div>
                            <div className="col-3 card shadow ">
                                <div className="row mt-3">
                                    <h3 className='text-center mt-5'>More</h3>
                                </div>
                                <div className="row ">
                                   <MdMoreHoriz size={55}/>
                                </div>
                            </div>
                           </div>
                           
                        </div>
                    </div>

                    <div className="container mt-5">
                        <div className="row">
                            <div className="col">
                                 <h4 className='text-center'>See All Programming & Development Freelancing Services</h4>
                            </div>
                        </div>
                    </div>
                    <div className="container mt-2">
                        <div className="row">
                            <div className="col d-flex justify-content-center">
                                 <button className='bg-black text-white pt-2 pb-2 ps-4 pe-4 rounded-5'>View All</button>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                       <div className="row">
                        <div className="col">
                            <h1 className='text-center mt-5 findtop'>It's Easy to Get Work Done on Freelancer
                         </h1></div>
                          </div> 
                    </div>

                    <div className="container mt-4 align-items-center">
                        <div className="row gap-3 d-flex justify-content-center mt-3">
                            <div className="col-3 mt-4">
                                <div className="row">
                                <MdPostAdd size={60}/>
                                </div>
                                <div className="row"><h3 className='text-center'>Post a Job</h3></div>
                                <div className="row"><p  className='text-center'>Create your free job posting and start receiving Quotes within hours.</p></div>
                            </div>
                            <div className="col-3 mt-3">
                            <div className="row">
                                <FaComputer size={60}/>
                                </div>
                                <div className="row"><h3 className='text-center'>Hire Freelancers</h3></div>
                                <div className="row"><p  className='text-center'>Compare the Quotes you receive and hire the best freelance professionals for the job.</p></div>
                            </div>
                            <div className="col-3">
                            <div className="row">
                                <MdOutlinePayment size={60}/>
                                </div>
                                <div className="row"><h3 className='text-center'>Make Secure Payments</h3></div>
                                <div className="row"><p  className='text-center'>Choose from multiple payment methods with SafePay payment protection.</p></div>
                            </div>
                        </div>
                    </div>
                    
                    
  {!side ? (<div className="sidebar-container container-fluid d-inline-block position-absolute top-0 shadow h-100">
      <div className="row d-flex justify-content-end ">
        <div className="col-2 p-3 d-flex justify-content-end sidetop">
        <RxCross1 size={25} className="icon"   onClick={toggleSidePanel} />
        </div>
      </div>
      <div className="row d-flex justify-content-end">
        <div className="col-2 p-3 side">
             About
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
        Contact Us
        </div>
      </div>
      <Link to="/dashboard" className='text-decoration-none'><div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
          DashBoard
        </div>
        
      </div>
      </Link>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
           Services
        </div>
      </div>
      {login?(
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side" onClick={toggleLog}>
            
        </div>
      </div>):(<div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side" onClick={toggleLog}>
                Logout
        </div>
      </div>)}
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
           
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      <div className="row d-flex justify-content-end" >
        <div className="col-2 p-3 text-center side">
            
        </div>
      </div>
      
    </div>
):(<></>)}


<footer className="bg-black text-light text-center py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-4">
            <h5>Contact Us</h5>
            <p><MdEmail className="mb-1"/>  Email: info@freelancer.com</p>
            <p> <FaPhoneAlt className="mb-1"/>  Phone: 7548899769</p>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <p className='text-white text-decoration-none'>
            <FaXTwitter className="mb-1 me-2" />
               <a href="#" className='text-white text-decoration-none'>
                 Twitter
               </a>
            </p>
            <p className='text-white text-decoration-none'>
            <FaFacebook  className="mb-1 me-2" />
              <a href="#" className='text-white text-decoration-none'>
                Facebook
              </a>
            </p>
            
            <p className='text-white text-decoration-none'>
            <FaLinkedin className="mb-1 me-2" />
              <a href="#" className='text-white text-decoration-none'>
                LinkedIn
              </a>
            </p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            
            <p className='text-white text-decoration-none'>
            <FaInfoCircle className="mb-1 me-2" />
              <a href="#" className='text-white text-decoration-none'>About Us</a>
            </p>
            
            <p className='text-white text-decoration-none'>
            <MdOutlineMiscellaneousServices size={25} className="mb-1 me-2" />
              <a href="#" className='text-white text-decoration-none'>Services</a>
            </p>
            
            <p className='text-white text-decoration-none'>
            <FaPhoneAlt className="mb-1 me-2" />
              <a href="#" className='text-white text-decoration-none'>Contact Us</a>
            </p>
          </div>
        </div>
        <hr className="bg-light" />
        <p className="mb-0">
          &copy; {new Date().getFullYear()} Freelancer. All rights reserved.
        </p>
        <p>
          Made By Shaikh
        </p>
      </div>
    </footer>
     </>
  );
};



export default Home;
