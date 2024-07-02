import React, { useEffect, useState } from "react";
import "../style/Login.css";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
// import Signup from "./Signup";
// import axios from "axios";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";
const baseURL = process.env.REACT_APP_API_BASE_URL;

const Login = () => {
  // const navigate = useNavigate();
  // const [formData, setFormData] = useState({
  //   email: "",
  //   password: "",
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData((prevData) => ({ ...prevData, [name]: value }));
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const { data } = await axios.post(
  //       "http://localhost:5000/api/v1/author/login",
  //       formData
  //     );

  //     // Check if the response contains the JWT token
  //     if (data && data.data.accessToken) {
  //       await localStorage.setItem("token", data.data.accessToken);
  //       navigate("/");
  //       toast.success("User logged in successfully");
  //     } else {
  //       toast.error("Unable to log in user");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     toast.error("Invalid credentials");
  //   }
  // };

  const handleSignUp = async (event) => {
    event.preventDefault();
    try {
      // Redirect user to Google OAuth endpoint
      window.location.href = `${baseURL}/auth`;
    } catch (error) {
      console.error("Error:", error);
      // Handle error
    }
  };

 

  return (
    <>
      <div className="login-wrapper">
        <div className="main">
          <div className="login">
          <Link to="/">
          <img src={logo} />
        </Link>
            <label htmlFor="">Login Please!</label>
            <button className="button-login" onClick={handleSignUp}>
              Continue with Google!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
