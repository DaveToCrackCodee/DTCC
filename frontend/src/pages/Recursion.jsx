import React from "react";
import { Link } from "react-router-dom";
import "../style/Dsa.css";

const Recursion = () => {
  return (
    <div className="dsa-wrapper">
      {/* <!-- Array and Stl Intro --> */}
      <div className="discriptiondsa">
        <div className="typed-out">Recursion</div>
      </div>

      {/* <!-- Recursion  --> */}

      <div id="Recursion">
        <Link className="serial-number" to="https://youtu.be/EG9DP1tlGh8">
          1. What is Recursion? Why and When Recursion?{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/mY3ai3C_UeA">
          2. Table of 'N' and its Reverse{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/jnQ4MEm2VVU">
          3. Nth Element in Fibonacci Series
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/ePlMmkYI5Wc">
          4. Output Questions from Recursion Tree{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/83MUefDkshA">
          5. Print All Subsets of a String{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/so6N06a-eUQ">
          6. Permutation I{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/V_EPWZI-5r0">
          7. Permutation II{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/jb55niV7NPo">
          8. Combination Sum{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/ToYiq2IaUY8">
          9. Combination Sum II{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/52cHaDGEDBk">
          10. Generate Pathentheses{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/Bx0I2Hq8FDY">
          11. Count Number of Paths from (0,0) to (m,n).{" "}
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default Recursion;
