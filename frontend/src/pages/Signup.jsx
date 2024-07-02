// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "../style/Login.css";
// import axios from 'axios';
// import toast from "react-hot-toast";
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     userName: "",
//     email: "",
//     password: "",
//   });

//   // Handler for form input changes
//   const handleChange = (e) => {
//     const { id, value, type, checked, files, name } = e.target;
//     //console.log(name+" "+ value);

//     setFormData((prevData) => ({
//       ...prevData,
//       [name]:value,
//     }));
//   };

//   // Handler for form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formDataObj = new FormData();
//     Object.entries(formData).forEach(([key, value]) => {
//       formDataObj.append(key, value);
//     });
    
//     try {
      
//       const { data } = await toast.promise(
//         axios.post(
//           "http://127.0.0.1:5000/api/v1/author/register",
//           formDataObj,
//           {
//             headers: {
//               "Content-Type": "application/json",
//             },
//           }
//         ),
//         {
//           pending: "Register in progress...",
//           success: "User Registered successfully",
//           error: "Unable to Register user",
//           loading: "Register in progress...",
//         }
//       );
//       console.log("aaa");
//       navigate("/login");
//       // Handle success, redirect, or show a success message
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       // Handle errors, show an error message, etc.
//     }
//   };

//   return (
//     <div className="signup">
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="chk" aria-hidden="true">
//           Sign up
//         </label>
//         <input
//           className="input-login"
//           type="text"
//           name="userName"
//           placeholder="User name"
//           onChange={handleChange}
//           required=""
//         />
//         <input
//           className="input-login"
//           type="email"
//           name="email"
//           placeholder="Email"
//           onChange={handleChange}
//           required=""
//         />
//         <input
//           className="input-login"
//           type="password"
//           name="password"
//           placeholder="Password"
//           onChange={handleChange}
//           required=""
//         />
//         <button className="button-login" type="submit">
//           Sign up
//         </button>
//         {/* <button className="button-login" type="submit">
//           <Link to="/verifyOtp" style={{ textDecoration: "none" }}>
//             Verify Otp
//           </Link>
//         </button> */}
//       </form>
//     </div>
//   );
// };
// export default Signup;
