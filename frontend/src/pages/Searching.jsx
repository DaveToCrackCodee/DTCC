import React from "react";
import { Link } from "react-router-dom";
import "../style/Dsa.css";

const Searching = () => {
  return (
    <div className="dsa-wrapper">
      <div className="discriptiondsa">
		<div className="typed-out">Binary Search</div>
	</div>
	  
    {/* <!-- Binary Search  --> */}
	
    <div id="searching">
       
        <Link className="serial-number" to="https://youtu.be/4B7SRoo4Z-0">1. Binary Search Algorithm </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/aOI5sihqXL4">2. First and Last Occurrence of Element </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/8OgpE3I3KhQ">3. Search in Sorted Rotated Array</ Link><hr />
        <Link className="serial-number" to="https://youtu.be/WCyEi5MLhtc">4. Square Root </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/DsynPZ0q-8E">5. Ceil & Floor of a Element in a Sorted Array </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/Lh7T5k7N2Vs">6. Peak Element (Unsorted Array) </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/rD4dmBdCXp0">7. Search in Infinite Sorted Array </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/KnPHIRSpm3A">8. Minimum Difference Element in Sorted Array </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/7g5la-SIjnE">9. Median of Two Sorted Array </ Link><hr />
        <Link className="serial-number" to="https://youtu.be/9PuGK9SCi4E">10. Allocate Minimum Number of Pages </ Link><hr />
        
    </div>
    
    </div>
  );
};

export default Searching;
