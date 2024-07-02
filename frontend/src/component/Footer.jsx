import React from "react";
import '../style/Footer.css'
import "../style/Mode.css";
import { Link } from "react-router-dom";
import Insta from '../assets/social-media/instagram.png'
import Youtube from '../assets/social-media/youtube.png'
import Linkedin from '../assets/social-media/linkedin.png'

const Footer = () => {
    return (
        <div className="footer">
            {/* console.log(isDarkMode); */}
			<div className="beatTheLuck">
				Beat The Luck Dave <br />
				davetocrackcode@gmail.com <br />
				
			</div>
			
			
			<div className="socialmedia">
				<Link to="https://www.instagram.com/dave_to_crack_code/"><img
						src={Insta} alt=""/></Link>
				<Link to="https://www.youtube.com/channel/UC7bzV5BdSTXufiPwLRrjvxA"><img
						src={Youtube} alt=""/></Link>
				<Link to="https://www.linkedin.com/in/dave-to-crack-code/"><img
						src={Linkedin} alt=""/></Link>
			</div>

			<div className="beatTheLuck">
			Made with ❤ by Noddy
			</div>

		</div>
    );
};
export default Footer;