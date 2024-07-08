import React, { useState, useEffect } from "react";
import "../style/Navbar.css";
import "../style/Mode.css";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import darkMode from "../assets/mode/dark-mode.png";
import {jwtDecode} from "jwt-decode";
import { FaTimes } from "react-icons/fa";


const Navbar = ({ isDarkMode, toggleMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setIsMenuOpen(false);
  };

 
  const token = localStorage.getItem("token");
  const [user, setUser] = useState(() => {
    return token ? jwtDecode(token) : "";
  });

  // console.log("actual token - ",token);

  // Check if the user is logged in
  const isLoggedIn = !!token;

  // Log the current state for debugging
  // console.log("navbar token - ", localStorage.getItem("token"));
  // console.log("isLoggedIn in navbar -", isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("token");
    isLoggedIn=false;
    setUser("");
  };

  useEffect(() => {
    // console.log("Token changed:", token);
  }, [token,user]);

  return (
    <div className="header">
      <div className="logoD">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>

      <div className="head_container">
        <img
          id="modeicon"
          src={darkMode}
          style={{ height: "20px" }}
          alt=""
          onClick={toggleMode}
        />
        {isLoggedIn && (
          <>
            <div className="headerelements">
              <Link to="/" onClick={handleLogout}>
                {" "}
                Logout
              </Link>
            </div>
            
          </>
        )}
        {!isLoggedIn && (
          <>
            <div className="headerelements">
              <Link to="/login"> Register</Link>
            </div>
          </>
        )}
        <div className="headerelements">
              <Link to="/contestcoding">Contest Coding</Link>
        </div>
        <div className="headerelements">
          <Link to="https://www.youtube.com/channel/UC7bzV5BdSTXufiPwLRrjvxA">
            Youtube
          </Link>
        </div>

        <div className="headerelements">
          <Link to="/dsa">DSA</Link>
        </div>
        <div className="headerelements">
          <Link to="/">Home</Link>
        </div>
      </div>

      <button className="openbtn" onClick={handleToggleMenu}>
        ☰
      </button>

      {isMenuOpen && (
        <div className="sidepanel">
          <button className="close-sidebar-btn" onClick={closeSidebar}>
            <FaTimes />
          </button>

          <div id="modeicon" onClick={toggleMode}>
            <img src={darkMode} style={{ height: "20px" }} alt="" />
          </div>
          <Link to="/">Home</Link>
          <Link to="/dsa">DSA</Link>
          <Link to="/contestcoding">Contest Coding</Link>
          <Link to="https://www.youtube.com/channel/UC7bzV5BdSTXufiPwLRrjvxA">
            Youtube
          </Link>
          {isLoggedIn && (
            <>
              <div className="headerelements">
                <Link to="/" onClick={handleLogout}>
                  {" "}
                  Logout
                </Link>
              </div>
            </>
          )}
          {!isLoggedIn && (
            <>
              <div className="headerelements">
                <Link to="/login"> Register</Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
