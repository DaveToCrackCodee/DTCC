import React, { Component,useEffect } from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";
import LogoRevealPc from "../assets/videos/logo-reveal.mp4";
import LogoRevealPhone from "../assets/videos/logo-reveal-phone.mp4";
import Akash from "../assets/akash.png";

const baseURL = process.env.REACT_APP_API_BASE_URL;
const Home = () => {
  // window.location.reload()
  const token = localStorage.getItem("token");
  let isLoggedIn = token == null ? false : true;
  //console.log("efefe", isLoggedIn);
  console.log("tokennn ", token);
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
    <div className="background-container">
      <div className="logo-video-pc">
        <video
          muted
          autoPlay
          style={{ height: "100%", width: "100%", position: "fixed", top: "0" }}
          src={LogoRevealPc}
        ></video>
      </div>
      <div className="logo-video-phone">
        <video
          muted
          autoPlay
          style={{ height: "100%", width: "100%", position: "fixed", top: "0" }}
          src={LogoRevealPhone}
        ></video>
      </div>

      <div className="background-image">
        <div id="discriptionblock-home">
          {/* <div
            className="discription-home"
            style={{ height: "15em", paddingTop: "8%" }}
          >
            <div className="waviy">
              <span style={{ "--i": 1 }}>D</span>
              <span style={{ "--i": 2 }}>A</span>
              <span style={{ "--i": 3 }}>V</span>
              <span style={{ "--i": 4 }}>E</span>
              <br />
              <span style={{ "--i": 5 }}>T</span>
              <span style={{ "--i": 6 }}>O</span>
              <span> _ </span>
              <span style={{ "--i": 7 }}>C</span>
              <span style={{ "--i": 8 }}>R</span>
              <span style={{ "--i": 9 }}>A</span>
              <span style={{ "--i": 10 }}>C</span>
              <span style={{ "--i": 11 }}>K</span>
              <br />
              <span style={{ "--i": 12 }}>C</span>
              <span style={{ "--i": 13 }}>O</span>
              <span style={{ "--i": 14 }}>D</span>
              <span style={{ "--i": 15 }}>E</span>
            </div>
          </div> */}
          "Believe in yourself. Your determination can turn challenges into
          achievements."
        </div>
      </div>

      <div className="bg-cover-home">
        <div className="home_block">
          <h2>Apply for Mock Interview!</h2>
          <br />
          Did you know? 70% of interview success depends on communication. Apply
          for mock interviews covering the topics you've studied. Elevate your
          skills and confidence with our mock interviews! <br />
          Signup now to get started. <br />
          <br />
          {isLoggedIn ? (
            <Link
              className="button-home"
              style={{ textDecoration: "none" }}
              to="/mockinterview"
            >
              Apply
            </Link>
          ) : (
            <>
              <Link
                className="button-home"
                style={{ textDecoration: "none" }}
                to="/login"
                onClick={handleSignUp}
              >
                Login to Unlock!
              </Link>
            </>
          )}
        </div>
      </div>
      <div className="bg-cover-home">
        <div className="home_block">
          <h2>Contest Coding</h2>
          <br />
          Unlock Contest Coding! Consistency in Competitive Programming is key
          for excelling in placements. Explore all upcoming contests from
          platforms like <b>CodeChef</b>, <b>LeetCode</b> and <b>Codeforces</b>{" "}
          in one convenient location! <br />
          <br />
          {isLoggedIn ? (
            <Link
              className="button-home"
              style={{ textDecoration: "none" }}
              to="/contestcoding"
            >
              Contest Coding
            </Link>
          ) : (
            <>
              <Link
                className="button-home"
                style={{ textDecoration: "none" }}
                to="/login"
                onClick={handleSignUp}
              >
                Login to Unlock!
              </Link>
            </>
          )}
        </div>
      </div>

      <div className="background-image bg-cover-home" id="bg1">
        <div className="akash_wrapper">
          <div className="akash_block">
            <img className="akash-photo" src={Akash} alt="" />
          </div>

          <div className="akash_block">
            "Hello, I'm Akash Dave Post Graduated from NIT Trichy. I
            achieved AIR-22 in NIMCET 2021, AIR-3 in BHU MCA CET, and AIR-6 in
            MHCET. I've interned at Amazon as SDE, gaining valuable experience.
            'Dave to Crack Code' is my initiative, aiming to simplify coding,
            offer Mock Interviews for placements, and provide Contest Coding to
            elevate your competitive programming skills. Let's embark on this
            coding journey together and excel in placements!" <br /> <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
