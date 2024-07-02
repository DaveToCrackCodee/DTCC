import React, { useState, useEffect } from "react";
import axios from "axios";
import "../style/Home.css";
import "../style/MockInterview.css";
import toast from "react-hot-toast";
import { useNavigate } from 'react-router-dom';

function MockInterview() {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState([]);
  const [mockHistory, setMockHistory] = useState([]);
  const [communication, setCommunication] = useState(0);
  const [knowledge, setKnowledge] = useState(0);
  const [confidence, setConfidence] = useState(0);
  const [takenInterview, setTakenInterview] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setSelectedTopics((prevSelectedTopics) => [...prevSelectedTopics, value]);
    } else {
      setSelectedTopics((prevSelectedTopics) =>
        prevSelectedTopics.filter((topic) => topic !== value)
      );
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // window.location.href = 'http://localhost:5000/auth'; 
    try {
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const { data } = await toast.promise(
        axios.post(
          "http://127.0.0.1:5000/api/mock/mock_call",
          {
            topics: selectedTopics,
          },
          config
        ),
        {
          pending: "In progress...",
          success: "Applied successfully",
          error: "Unable to Apply",
          loading: "Applying in progress...",
        }
      );
      
      console.log("Response SUCCESS!! :");
      // window.location.reload();
      navigate("/");
    } catch (error) {

      if (error.response && error.response.status === 406) {
        toast.error("Please submit the feedback for previous match");
      }
      if (error.response && error.response.status === 405) {
        toast.error("You can only apply for one interview at a time.");
      }
      console.error("Error:", error);
      // Handle error
    }
  };
  

  const handleFeedback = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };
    const formData = {
      communication,
      knowledge,
      confidence,
      takenInterview,
      feedback,
    };


    try {
      const { data } = await toast.promise(
        axios.post("http://127.0.0.1:5000/api/mock/feedback", 
        formData, config),
        {
          pending: "Feedback Submission in progress...",
          success: "Feedback Submitted successfully",
          error: "Unable to Submit Feedback",
          loading: "Submission in progress...",
        }
      );
      console.log("feedback submission");
      navigate("/");
      // Handle success, redirect, or show a success message
    } catch (error) {
      console.error("Error submitting feedback form:", error);
      // Handle errors, show an error message, etc.
    }
  };

  const getMockHistory = async () => {
    try {
      const token = localStorage.getItem("token");
      const headers = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };

      const response = await axios.get(
        "http://127.0.0.1:5000/api/mock//getMockHistory",
        { headers }
      );
      const mockhistory = response.data.data;
      if (response.status === 200) {
        // Assuming the response.data contains the array of journals
        console.log("mock response:- ", mockhistory.data);
        setMockHistory(mockhistory.data);
        toast.success("Data Fetched Successfully");
      } else {
        toast.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      toast.error("Some internal server error");
    }
  };

  useEffect(() => {
    getMockHistory();
  }, []);

  return (
    <>
      <div className="mock-wrapper">
        <div className="mock_block">
          <h2>Apply for Mock Interview</h2>
          <p>
            Are you ready to excel in your coding interviews? Mock interview
            sessions are here to help! Apply for mock interviews covering the
            topics you've studied. These sessions will boost your coding and
            problem-solving skills, as well as enhance your communication skills
            while building your confidence. In our mock interview program,
            you'll take part in a mutually beneficial process. You'll have the
            chance to conduct a mock interview for another candidate, and in
            return, another candidate will interview you. However, please be
            aware that any misconduct or fraudulent behavior, such as refusing
            interviews or engaging in dishonest actions, will lead to a
            temporary two-month suspension from participating in our program. We
            are dedicated to maintaining a fair and respectful environment to
            help everyone succeed in their interview preparations. Get ready to
            excel in your job placements and secure that dream role!
          </p>
          <form onSubmit={handleSubmit}>
            <p>
              <b>Select Topics:</b>
            </p>
            <table>
              <tbody>
                <tr>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="ArrayStl"
                      onChange={handleCheckboxChange}
                    />
                    ArrayStl
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Sorting"
                      onChange={handleCheckboxChange}
                    />
                    Sorting
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Searching"
                      onChange={handleCheckboxChange}
                    />
                    Searching
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Recursion"
                      onChange={handleCheckboxChange}
                    />
                    Recursion
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="DynamicProgramming"
                      onChange={handleCheckboxChange}
                    />
                    Dp
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Backtracking"
                      onChange={handleCheckboxChange}
                    />
                    Backtracking
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="LinkedList"
                      onChange={handleCheckboxChange}
                    />
                    LinkedList
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Stack"
                      onChange={handleCheckboxChange}
                    />
                    Stack
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Queue"
                      onChange={handleCheckboxChange}
                    />
                    Queue
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="Graph"
                      onChange={handleCheckboxChange}
                    />
                    Graph
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="OOps"
                      onChange={handleCheckboxChange}
                    />
                    OOps
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="DBMS"
                      onChange={handleCheckboxChange}
                    />
                    DBMS
                  </td>
                </tr>

                <tr>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="OperatingSystem"
                      onChange={handleCheckboxChange}
                    />
                    Operating System
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="System Design"
                      onChange={handleCheckboxChange}
                    />
                    System Design
                  </td>
                  <td>
                    <input
                      className="topic-checkbox"
                      name="topics"
                      type="checkbox"
                      value="All"
                      onChange={handleCheckboxChange}
                    />
                    All
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} style={{ textAlign: "center" }}>
                    <button className="button-mockpage" type="submit">
                      Apply
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
          <div id="success-modal" className="modal">
            <div className="modal-content">
              <span className="close">&times;</span>
              <p style={{ color: "rgb(5, 255, 5)", fontWeight: "bold" }}>
                Applied Successfully! <br />
                <h4>
                  You will be informed of the interview timings and platform via
                  email.
                </h4>
                <br />
              </p>
            </div>
          </div>
        </div>

         <div className="mock_block">
          {mockHistory.length > 0 ? (
            mockHistory.map((mockhistory) => (
              <div className="mock_history">
                Interviewer :- {mockhistory.interviewer} <br />
                Topics :- {mockhistory.topics.join(", ")} <br />
                Status :- {mockhistory.status} <br />
                Date :- {mockhistory.interviewDate} <br />
                {mockhistory.status == "Completed" && (!mockhistory.feedbackGiven) && (
                  <div className="mockFeedback">
                    <h4 style={{color: "#c00202" , textAlign: "center"}}>Rate {mockhistory.interviewer}'s Performance!</h4>
                    <br />
                    <form onSubmit={handleFeedback}>
                      <table>
                        <tr>
                          <td>
                            <label htmlFor="communication">
                              Rate Communication (1-5):
                            </label>
                          </td>
                          <td>
                            <input
                              type="number"
                              id="communication"
                              min="1"
                              max="5"
                              value={communication}
                              onChange={(e) =>
                                setCommunication(parseInt(e.target.value))
                              }
                              required
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <label htmlFor="knowledge">
                              Rate Knowledge of Topic (1-5):
                            </label>
                          </td>
                          <td>
                            <input
                              type="number"
                              id="knowledge"
                              min="1"
                              max="5"
                              value={knowledge}
                              onChange={(e) =>
                                setKnowledge(parseInt(e.target.value))
                              }
                              required
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <label htmlFor="confidence">
                              Rate Confidence (1-5):
                            </label>
                          </td>
                          <td>
                            <input
                              type="number"
                              id="confidence"
                              min="1"
                              max="5"
                              value={confidence}
                              onChange={(e) =>
                                setConfidence(parseInt(e.target.value))
                              }
                              required
                            />
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <label htmlFor="takenInterview">
                              Has {mockhistory.interviewer} Taken Your Interview?:
                            </label>
                          </td>
                          <td>
                            <select
                              id="takenInterview"
                              value={takenInterview}
                              onChange={(e) =>
                                setTakenInterview(e.target.value)
                              }
                              required
                            >
                              <option value="">Select</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                            </select>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <label htmlFor="feedback">
                              Feedback (Up to 100 words):
                            </label>
                          </td>
                          <td>
                            <textarea
                              id="feedback"
                              value={feedback}
                              onChange={(e) => setFeedback(e.target.value)}
                              maxLength={100}
                              required
                            />
                          </td>
                        </tr>
                        <tr>
                          <td colSpan={2} style={{ textAlign: "center" }}>
                            <button className="button-mockpage" type="submit">
                              Submit
                            </button>
                          </td>
                        </tr>
                      </table>
                    </form>
                  </div>
                )}
                {(mockhistory.feedbackAnswer.length != 0) && (
                  <div className="mockFeedback">
                  <h4 style={{color: "#c00202" , textAlign: "center"}}>
                    Your Performance</h4>
                  <br />
                  <table>
                    <tr>
                      <td>
                        <label htmlFor="communication">
                          Communication (1-5):
                        </label>
                      </td>
                      <td>
                        <label htmlFor="">{mockhistory.feedbackAnswer[0].answer} </label>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label htmlFor="knowledge">
                          Knowledge of Topic (1-5):
                        </label>
                      </td>
                      <td>
                      <label htmlFor="">{mockhistory.feedbackAnswer[1].answer} </label>
                        
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <label htmlFor="confidence">
                          Rate Confidence (1-5):
                        </label>
                      </td>
                      <td>
                      <label htmlFor="">{mockhistory.feedbackAnswer[2].answer} </label>
                        
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label htmlFor="feedback">
                          Remarks:
                        </label>
                      </td>
                      <td>
                      <label htmlFor="">{mockhistory.feedbackAnswer[3].answer} </label>
                      </td>
                    </tr>
                  </table>
              </div>   
                )}
              </div>
            ))
          ) : (
            <p>No History Availaible</p>
          )}
        </div> 
      </div>
    </>
  );
}

export default MockInterview;
