import React, { useState } from "react";
import Layout from "./component/Layout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dsa from "./pages/Dsa";
import ArrayStl from "./pages/ArrayStl";
import Recursion from "./pages/Recursion";
import ScrollToTop from "./component/ScrollToTop";
import Sorting from "./pages/Sorting";
import Searching from "./pages/Searching";
import ContestCoding from "./pages/ContestCoding";
import { Toaster } from "react-hot-toast";
import { Protected, Public } from "./middleware/auth.js";
import MockInterview from "./pages/MockInterview.jsx";
import Contribute from "./pages/Contribute.jsx";
import TokenCapture from "./pages/TokenCapture.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";


const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

 

  return (
    <>
      <Router>
        <Toaster />
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <Layout isDarkMode={isDarkMode} toggleMode={toggleMode} >
                <Home />
              </Layout>
            }
          />

          <Route
            path="/login"
            element={
              <Public>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <Login />
                </Layout>
              </Public>
            }
          />

          <Route
            path="/privacy_policy"
            element={
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <PrivacyPolicy />
                </Layout>
            }
          />

          <Route
            path="/auth/callback/:access_token"
            element={
              // <Public>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <TokenCapture />
                </Layout>
              // </Public>
            }
          />

          <Route
            path="/mockinterview"
            element={
              <Protected>
              <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                <MockInterview />
              </Layout>
               </Protected> 
            }
          />

          <Route
            path="/dsa"
            element={
              // <Public>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <Dsa />
                </Layout>
              // </Public>
            }
          />

          <Route
            path="/contestcoding"
            element={
               <Protected>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <ContestCoding />
                </Layout>
                  </Protected> 
            }
          />

          <Route
            path="/contribute"
            element={
              // <Public>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <Contribute />
                </Layout>
              // </Public>
            }
          />

          <Route
            path="/arraystl"
            element={
               <Protected>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <ArrayStl />
                </Layout>
                </Protected> 
            }
          />

          <Route
            path="/recursion"
            element={
              <Protected>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <Recursion />
                </Layout>
                </Protected> 
            }
          />

          <Route
            path="/sorting"
            element={
              <Protected>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <Sorting />
                </Layout>
              </Protected> 
            }
          />

          <Route
            path="/searching"
            element={
              <Protected>
                <Layout isDarkMode={isDarkMode} toggleMode={toggleMode}>
                  <Searching />
                </Layout>
              </Protected>
            }
          />
        </Routes>
      </Router>
    </>
  );
};

export default App;
