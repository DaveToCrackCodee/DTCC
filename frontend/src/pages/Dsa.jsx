import React from "react";
import '../style/Dsa.css';
import ArraystlImage from '../assets/thumbnail/arraystl.png';
import SortingImage from '../assets/thumbnail/sorting.png';
import SearchingImage from '../assets/thumbnail/searching.png';
import RecursionImage from '../assets/thumbnail/recursion.png';
import ContributeImage from '../assets/thumbnail/contribute.png';
import { Link } from "react-router-dom";

const Dsa = () => {
  return (
    <div className="dsa-wrapper">
      <div className="discriptiondsa">
        <div className="typed-out">Data Structure and Algorithm</div>
      </div>
{/* Contribute */}
      <hr />
      <div id="discriptionblock">
        <Link className="discription" to="/contribute">
          <img src={ContributeImage} />
        </Link>
        <div className="discription">
          <h3>Contribute your code.</h3>
          We believe that learning is a collaborative journey, and your contribution can make a
          real impact on fellow learners. Whether it's unraveling the
          intricacies of a particular algorithm, explaining time and space
          complexities, or offering unique perspectives on coding challenges,
          your blogs can serve as valuable resources for our community. 
        </div>
      </div>


      {/* // Array and STL */}
      <hr />
      <div id="discriptionblock">
        <Link className="discription" to="/arraystl">
          <img src={ArraystlImage} />
        </Link>
        <div className="discription">
          <h3>Array and STL C++</h3>
          This Playlist is made to clear the Concepts from a very basic level to
          Hard Level Problems. Starting From Array Definition then Learning
          STL(Standard Template Library) Functions, Then Solving Problems From
          different Concepts Which will Boost up your Skills in Competitive
          Programming and DSA ( Data Structures and Algorithm).
        </div>
      </div>
      <hr />
      {/* <!-- Sorting Searching --> */}
      <div id="discriptionblock">
        <Link className="discription" to="/sorting">
          <img src={SortingImage} />
        </Link>
        <div className="discription">
          <h3>Sorting and Searching</h3>
          This Playlist is made to Cover Important Algorithms in Searching and
          Sorting, So that by completing the Playlist one can Solve Questions
          related to Binary Search and also one can explain the important
          Sorting Techniques.{" "}
        </div>
      </div>
      <hr />

      {/* <!-- Binary Search --> */}
      <div id="discriptionblock">
        <Link className="discription" to="/searching">
          <img src={SearchingImage} />
        </Link>
        <div className="discription">
          <h3>Binary Search</h3>
          This Playlist is based on BINARY SEARCH Algorithm and the Questions
          related to Binary Search from a Basic Level to Advanced Level .
        </div>
      </div>
      <hr />
      {/* <!-- Recursion --> */}
      <div id="discriptionblock">
        <Link className="discription" to="/recursion">
          <img src={RecursionImage} />
        </Link>
        <div className="discription">
          <h3>Recursion</h3>
          This Playlist is based on RECURSION in which concept building from
          basic to advanced is done. The order of the Questions from a Basic
          Level to Advanced Level is maintained so that one can feel Confident
          after completing this series.
        </div>
      </div>
        <hr />
    </div>
  );
};

export default Dsa;