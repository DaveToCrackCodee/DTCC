import React from "react";
import { Link } from "react-router-dom";
import "../style/Dsa.css";

const Sorting = () => {
  return (
    <div className="dsa-wrapper">
      <div className="discriptiondsa">
        <div className="typed-out">Sorting and Searching</div>
      </div>

      {/* <!-- Sorting list --> */}

      <div id="sorting">
        <Link className="serial-number" to="https://youtu.be/Z4-gNRn78lI">
          1. Bubble Sort{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/05xPW7COmB0">
          2. Selection Sort{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/vF7lfUWjkhs">
          3. Insertion Sort
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/UtuhBsso26M">
          4. Count Sort{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/AwOwiDmPlRY">
          5. Radix Sort{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/QpNmfd88jtQ">
          6. Quick Sort{" "}
        </Link>
        <hr />
        <Link className="serial-number" to="https://youtu.be/-4V3TjHAzdk">
          7. Merge Sort{" "}
        </Link>
        <hr />
      </div>
    </div>
  );
};

export default Sorting;
