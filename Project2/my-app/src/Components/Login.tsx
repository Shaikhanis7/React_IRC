import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import axios from 'axios';
import sigin from '../assets/img/login2.png';
import '../assets/css/Login.css';

interface User {
  name: string;
  password: string;
}

const Login: React.FC = () => {
  const navigate = useNavigate();
  const notify = (message: string, isSuccess: boolean) =>
    isSuccess ? toast.success(message) : toast.error(message);

  const { login } = useAuth();

  const [user, setUser] = useState<User>({
    name: '',
    password: '',
  });

  const { name, password } = user;

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/login', user);
      if (response.status === 200) {
        notify('Login successful', true);
        login(); // Assuming login() is a function from useAuth() to update authentication status
        setTimeout(() => {
          navigate('/');
        }, 2200);
      } else {
        notify('Login unsuccessful', false); // Notify user of unsuccessful login
        console.error('Login failed:', response.data);
        // Handle login failure (e.g., display error message)
      }
    } catch (error) {
      notify('Error while logging in', false); // Notify user of error
      console.error('Error while logging in:', error);
      // Handle error (e.g., display error message)
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

          <div className="col-5 card pt-3">
            <div className="row text-center pt-3">
              <h2>Hello</h2>
            </div>
            <div className="row text-center">
              <p>We are happy to see you back</p>
            </div>
            <form onSubmit={onSubmit}>
              <div className="row d-flex justify-content-center mt-4">
                <input
                  type="text"
                  className="form-control bg-light input-group"
                  placeholder="UserName"
                  style={{ width: '95%' }}
                  name="name"
                  value={name}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <input
                  type="password"
                  className="form-control bg-light input-group"
                  placeholder="Password"
                  name="password"
                  style={{ width: '95%' }}
                  value={password}
                  onChange={onInputChange}
                  required
                />
              </div>
              <div className="row d-flex justify-content-center mt-3">
                <div className="input-group mb-3 d-flex justify-content-between">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="formCheck"
                    />
                    <label
                      htmlFor="formCheck"
                      className="form-check-label text-secondary"
                    >
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
                />
              </div>
            </form> {/* Form ends here */}
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
                Don't have an account?<a href="">SignUp</a>
              </p>
            </div>
          </div>
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
