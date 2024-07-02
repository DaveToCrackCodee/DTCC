import React from "react";
import "../style/Home.css";
import { Link } from "react-router-dom";

const Contribute=()=>{
    return(
        <div className="background-image bg-cover-home" id="bg1">
        <div className="home_block">
          <h2>Contribute to the Community</h2>
          "Welcome to our Blog Submission platform, where you can share your
          insights and understanding of coding and Data Structures & Algorithms
          (DSA) concepts covered in our YouTube channel videos. We believe that
          learning is a collaborative journey, and your contribution can make a
          real impact on fellow learners. Whether it's unraveling the
          intricacies of a particular algorithm, explaining time and space
          complexities, or offering unique perspectives on coding challenges,
          your blogs can serve as valuable resources for our community. Submit
          your well-crafted explanations along with time and space complexities,
          and our team will review and potentially feature your contributions on
          our website. Join us in building a knowledge-sharing hub that benefits
          both novice and experienced learners alike." <br /> <br />
          <Link
            className="button-home"
            to="https://forms.gle/VRTgpkr9CiJVCRwB8">
            Contribute
          </Link>
        </div>
      </div>
    );
};
export default Contribute;