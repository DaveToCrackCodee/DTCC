import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/ContestCoding.css";
import "../style/Dsa.css";
import { Link } from "react-router-dom";

const ContestCoding = () => {
  const codechefContests = [];
  const leetcodeContests = [];
  const today = new Date();

  let currentDate = new Date(today);

  while (codechefContests.length + leetcodeContests.length < 10) {
    currentDate.setDate(currentDate.getDate() + 1); // Move to the next day
    const dayOfWeek = currentDate.getDay();
    const hours = dayOfWeek === 0 ? 8 : dayOfWeek === 3 ? 20 : 8; // 8:00 AM for Sunday, 8:00 PM for Wednesday
    const minutes = 0;
    const seconds = 0;

    currentDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      hours,
      minutes,
      seconds
    );
    if (dayOfWeek === 3) {
      codechefContests.push({
        name: "Codechef Contest :",
        date: new Date(currentDate),
        passed: currentDate < today,
        url: "https://www.codechef.com/contests?itm_medium=navmenu&itm_campaign=allcontests",
      });
    } else if (dayOfWeek === 0) {
      // Leetcode contest on Sunday at 8:00 AM
      leetcodeContests.push({
        name: "Leetcode Contest :",
        date: new Date(currentDate),
        passed: currentDate < today,
        url: "https://leetcode.com/contest/",
      });
    }
  }
  const upcomingCodechefContests = codechefContests
    .filter((contest) => !contest.passed)
    .slice(0, 5);

  const upcomingLeetcodeContests = leetcodeContests
    .filter((contest) => !contest.passed)
    .slice(0, 5);


    const [codeforcesContests, setContests] = useState([]);

    useEffect(() => {
      const fetchCodeforcesContests = async () => {
        try {
          const response = await axios.get('http://127.0.0.1:5000/api/codeforces/contest-list'); // Updated URL
          console.log("resssssssss", response);
          if (response.data.status === "OK") {
            const filteredContests = response.data.result.filter(
              (contest) => contest.phase === "BEFORE"
            );
            console.log("dfgdfgdfgdfg ", filteredContests);
            setContests(filteredContests);
          } else {
            console.error("Error fetching contests:", response.data.comment);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchCodeforcesContests();
    }, []);
  // const [codeforcesContests, setContests] = useState([]);

  // useEffect(() => {
  //   const fetchCodeforcesContests = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://codeforces.com/api/contest.list"
  //       );
  //       console.log("resssssssss",response);
  //       if (response.data.status === "OK") {
  //         const filteredContests = response.data.result.filter(
  //           (contest) => contest.phase === "BEFORE"
  //         );
  //         console.log("dfgdfgdfgdfg ", filteredContests);
  //         setContests(filteredContests);
  //       } else {
  //         console.error("Error fetching contests:", response.data.comment);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };


  //   fetchCodeforcesContests();
  // }, []);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000);
    return date;
  };

  const convertToHour = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    if (hours > 24) {
      hours /= 24;
      return hours.toString() + " Dy";
    }
    return hours.toString() + " Hrs";
  };

  return (
    <div className="contests-wrapper">
      <h1>Welcome to Contest Coding!</h1>
      <hr />

      <table className="contests-table">
        <thead>
          <tr>
            <th colSpan={5}>
              <h2>CodeChef Upcoming Contests</h2>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>Duration</th>
            <th>Start Time</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {upcomingCodechefContests.map((contest, index) => (
            <tr key={index}>
              <td>{contest.name}</td>
              <td>
                {contest.date.toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td>2 Hrs</td>
              <td>{contest.date.toLocaleTimeString()}</td>
              <td>
                {" "}
                <Link to={contest.url} className="contests-link">
                  Link
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />

      <table className="contests-table">
        <thead>
          <tr>
            <th colSpan={5}>
              <h2>Codeforces Upcoming Contests</h2>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>Duration</th>
            <th>Start Time</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {codeforcesContests
            .slice()
            .reverse()
            .map((contest) => (
              <tr key={contest.id}>
                <td>{contest.name}</td>
                <td>
                  {formatDate(contest.startTimeSeconds).toLocaleString(
                    "en-GB",
                    { day: "2-digit", month: "2-digit", year: "numeric" }
                  )}
                </td>
                <td>{convertToHour(contest.durationSeconds)}</td>
                <td>
                  {formatDate(contest.startTimeSeconds).toLocaleTimeString()}
                </td>
                <td>
                  {" "}
                  <Link
                    to="https://codeforces.com/contests"
                    className="contests-link"
                  >
                    Link
                  </Link>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <hr />

      <table className="contests-table">
        <thead>
          <tr>
            <th colSpan={5}>
              <h2>Leetcode Upcoming Contests</h2>
            </th>
          </tr>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>Duration</th>
            <th>Start Time</th>
            <th>Link</th>
          </tr>
        </thead>
        <tbody>
          {upcomingLeetcodeContests.map((contest, index) => (
            <tr key={index}>
              <td>{contest.name}</td>
              <td>
                {contest.date.toLocaleString("en-GB", {
                  day: "2-digit",
                  month: "2-digit",
                  year: "numeric",
                })}
              </td>
              <td>2 Hrs</td>
              <td>{contest.date.toLocaleTimeString()}</td>
              <td>
                {" "}
                <Link to={contest.url} className="contests-link">
                  Link
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
    </div>
  );
};

export default ContestCoding;
