import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import axios from "axios";
import login from "../assets/images/7706807.jpg";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const [valid, setValid] = useState(true);

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/", loginData);
      const res = await toast.promise(
        fetch("http://localhost:8080/users"),
        {
          pending: 'Promise is pending',
          success: 'Promise resolved 👌',
          error: 'Promise rejected 🤯'
        }
      );
      console.log(res);

      const successMessage = "Login successful";

      if (response.data.startsWith(successMessage)) {
        const responseMessage = response.data
          .substring(successMessage.length)
          .trim();
        const [userName, userId] = responseMessage.split(",");
        const cleanedUserName = userName.replace(/[\[\]\s]+/g, "");
        const cleanedUserId = userId.replace(/[\[\]\s]+/g, "");
        localStorage.setItem("name", cleanedUserName);
        localStorage.setItem("userId", cleanedUserId);
        console.log("Welcome, " + userName + userId);
        localStorage.setItem("auth", "true");
        setValid(true);
        localStorage.setItem("email", loginData.email);
        if (loginData.email === "yashwanth2k05@gmail.com") {
          localStorage.setItem("admin", "true");
          navigate("/admin");
        } else {
          localStorage.setItem("admin", "false");
          navigate("/");
        }
      } else {
        console.error("Unexpected response format:", response.data);
        setValid(false);
      }
    } catch (error) {
      console.error("Error during login:", error);
      setValid(false);
    }
  };

  return (
    <div className="container py-4">
      <ToastContainer />
      <div className="row g-0 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <div id="lgcard" className="card cascading-right">
            <div className="card-body p-5 shadow-5 text-center">
              <h2 className="fw-bold mb-5">Welcome to Fresh & Co.</h2>
              <p
                className="invalid-credentials"
                style={{ display: valid ? "none" : "block" }}
              >
                Enter valid credentials
              </p>
              <form onSubmit={onSubmit}>
                <div className="form-outline mb-4">
                  <input
                    type="email"
                    value={loginData.email}
                    name="email"
                    id="form3Example3"
                    className="form-control"
                    onChange={handleChange}
                  />
                  <label className="form-label">Email address</label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="form3Example4"
                    value={loginData.password}
                    name="password"
                    className="form-control"
                    onChange={handleChange}
                  />
                  <label className="form-label">Password</label>
                  <button
                    type="button"
                    className="btn btn-link password-toggle"
                    onClick={togglePasswordVisibility}
                  >
                    {showPassword ? (
                      <VisibilityIcon className="eye" fontSize="small" />
                    ) : (
                      <VisibilityOffIcon className="eye" fontSize="small" />
                    )}
                  </button>
                </div>

                <div className="form-check d-flex justify-content-center mb-4">
                  <input
                    className="form-check-input me-2"
                    type="checkbox"
                    id="form2Example33"
                    defaultChecked
                  />
                  <label className="form-check-label">
                    Subscribe to our newsletter
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block mb-4"
                >
                  Sign In
                </button>

                <div className="text-center">
                  <p>or sign in with:</p>
                  <button type="button" className="btn btn-link" id="gicon">
                    <FontAwesomeIcon icon={faGoogle} size="2x" />
                  </button>
                </div>

                <div className="text_center">
                  <p>New to Fresh & Co.</p>
                  <Link
                    to="/register"
                    className="btn btn-primary btn-block mb-4"
                  >
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-5 mb-lg-0" id="limg">
          <img
            src={login}
            height="100%"
            width="100%"
            className="rounded-100 shadow-100"
            alt="login image"
          />
        </div>
      </div>
    </div>
  );
}

export default Login;