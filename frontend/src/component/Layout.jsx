import  React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import '../style/Mode.css'

const Layout = ({isDarkMode,toggleMode, children }) => {
  //console.log(children);
  return (
    <>
      <div className={isDarkMode ? 'dark-mode' : 'light-mode'}>
        <Navbar isDarkMode={isDarkMode} toggleMode={toggleMode}/>
        {children}
        <Footer isDarkMode={isDarkMode} />
      </div>
    </>
  );
};
// document.body.style.overflow = 'hidden';
export default Layout;
