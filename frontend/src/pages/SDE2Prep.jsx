import React, {useState} from "react";
import "../style/SDE2Prep.css";

const resources = [
  {
    topic: "Dynamic Programming",
    resource: "Striver DP Series",
    link: "https://youtube.com/playlist?list=PLUjsr2mCfExRMa089J3qC8g8BQc-GFXss&si=sp3fH4d-fwDIIhzC",
    purpose: "Master DP patterns and interview problems",
  },
  {
    topic: "Graphs",
    resource: "Striver Graph Series",
    link: "https://www.youtube.com/playlist?list=PLgUwDviBIf0oE3gA41TKO2H5bHpPd7fzn",
    purpose: "Strong graph intuition and traversal concepts",
  },
  {
    topic: "Low Level Design",
    resource: "Code with Aryan LLD",
    link: "https://www.youtube.com/playlist?list=PLpxM6m39X_t-Rk9lZVVD4U6JycAAIIEDW",
    purpose: "SOLID principles and machine coding",
  },
  {
    topic: "Stack Concepts",
    resource: "Aditya Verma Stack Series",
    link: "https://www.youtube.com/playlist?list=PL_z_8CaSLPWdeOezg68SKkeLN4-T_jNHd",
    purpose: "Stack based problem solving",
  },
  {
    topic: "High Level Design",
    resource: "Hello Interview HLD",
    link: "https://www.hellointerview.com/learn/system-design/in-a-hurry/introduction",
    purpose: "Scalable system design concepts",
  },
  {
    topic: "Basics of DSA",
    resource: "Dave to Crack Code DSA Basics",
    link: "https://dave-to-crack-code.vercel.app/dsa",
    purpose: "Strong DSA foundations",
  },
];

const weeklyPlan = [
  ["Week 1", "DP + Stack", "5 DP Videos + 20 Questions"],
  ["Week 2", "DP + LLD", "5 DP + 3 LLD Videos"],
  ["Week 3", "DP Intensive", "6 DP Videos + Revision"],
  ["Week 4", "Finish Stack", "Remaining Stack + DSA"],
  ["Week 5", "Graphs Start", "5 Graph Videos"],
  ["Week 6", "Graphs + DSA", "6 Graph Videos"],
  ["Week 7", "Graphs + LLD", "Graphs + 4 LLD"],
  ["Week 8", "Advanced Graphs", "7 Graph Videos"],
  ["Week 9", "LLD Intensive", "6 LLD Videos"],
  ["Week 10", "Revision", "Mixed Revision"],
  ["Week 11", "Weak Areas", "Pending Topics"],
  ["Week 12", "Final Prep", "Interview Readiness"],
];

const totalWeeks = 12;

const SDE2Prep = () => {
    const [completedWeeks, setCompletedWeeks] = useState({});

const toggleWeek = (week) => {
  setCompletedWeeks((prev) => ({
    ...prev,
    [week]: !prev[week],
  }));
};

const completedCount =
  Object.values(completedWeeks).filter(Boolean).length;

const progressPercentage = Math.round(
  (completedCount / totalWeeks) * 100
);

  return (
    <div className="sde2-wrapper">
      <div className="hero-box">
        <h1>Dave to Crack Interview for SDE 2</h1>

        <p>
          A complete roadmap for job switchers targeting SDE 2 interviews with
          preparation focused on DSA, LLD, HLD, Graphs, Dynamic Programming,
          contests and interview level problem solving.
        </p>
      </div>

      <div className="stats-grid">
        <div className="stats-card">
          <h2>168+</h2>
          <p>Total Videos</p>
        </div>

        <div className="stats-card">
          <h2>300+</h2>
          <p>DSA Questions</p>
        </div>

        <div className="stats-card">
          <h2>12</h2>
          <p>Weeks Plan</p>
        </div>

        <div className="stats-card">
          <h2>2</h2>
          <p>Study Approaches</p>
        </div>
      </div>

      <h2 className="sde2-heading">Learning Materials & Resources</h2>

      <table className="sde2-table">
        <thead>
          <tr>
            <th>Topic</th>
            <th>Resource</th>
            <th>Purpose</th>
          </tr>
        </thead>

        <tbody>
          {resources.map((item, index) => (
            <tr key={index}>
              <td>{item.topic}</td>

              <td>
                <a href={item.link} target="_blank" rel="noreferrer">
                  {item.resource}
                </a>
              </td>

              <td>{item.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2 className="sde2-heading">Aiming for SDE 2</h2>

      <div className="content-box">
        Dynamic Programming and Graphs are prioritized because they provide the
        highest return for SDE 2 coding interviews. Low Level Design and High
        Level Design are gradually introduced to strengthen scalable thinking
        and machine coding skills.
        <br />
        <br />
        The goal is not just completing videos, but building interview
        confidence through revision, contests, and consistent problem solving.
      </div>

      <h2 className="sde2-heading">Two Flexible Study Approaches</h2>

      <div className="plans-grid">
        <div className="plan-card blue-card">
          <h3>Option 1 - Balanced Weekday Plan</h3>

          <p>
            Suitable for professionals preferring consistency on weekdays with
            rest on weekends. Requires around 4 to 4.5 hours daily.
          </p>

          <ul>
            <li>Daily DP / Graph Learning</li>
            <li>4-5 DSA Questions</li>
            <li>LLD Practice</li>
            <li>Minimal Weekend Work</li>
          </ul>
        </div>

        <div className="plan-card green-card">
          <h3>Option 2 - Weekend Intensive Plan</h3>

          <p>
            Suitable for hectic schedules. Requires around 2 to 3 hours daily
            with focused weekend learning sessions.
          </p>

          <ul>
            <li>Light Weekday Study</li>
            <li>Weekend Deep Dives</li>
            <li>Contest Practice</li>
            <li>Revision Sessions</li>
          </ul>
        </div>
      </div>

      <h2 className="sde2-heading">12 Week Execution Plan</h2>

      <table className="sde2-table">
        <thead>
          <tr>
            <th>Week</th>
            <th>Focus Area</th>
            <th>Target</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
  {weeklyPlan.map((item, index) => (
    <tr key={index}>
      <td>{item[0]}</td>

      <td>{item[1]}</td>

      <td>{item[2]}</td>

      <td>
        <div className="week-checkbox">
          <input
            type="checkbox"
            checked={completedWeeks[item[0]] || false}
            onChange={() => toggleWeek(item[0])}
          />
        </div>
      </td>
    </tr>
  ))}
</tbody>

      </table>
      <h2 className="sde2-heading">Daily DSA Coverage Areas</h2>

<div className="cards-grid">
  <div className="option-card blue-card">
    <h3>Daily Coding Topics</h3>

    <ul>
      <li>Arrays</li>
      <li>Strings</li>
      <li>Linked Lists</li>
      <li>Stacks & Queues</li>
      <li>Sliding Window</li>
      <li>Binary Search</li>
      <li>Hashing</li>
      <li>Recursion & Backtracking</li>
    </ul>
  </div>

  <div className="option-card blue-card">
    <h3>Competitive Practice</h3>

    <ul>
      <li>LeetCode Weekly Contests</li>
      <li>Codeforces Practice</li>
      <li>Virtual Contests</li>
      <li>Timed Problem Solving</li>
      <li>Weak Topic Revision</li>
      <li>Pattern Recognition Practice</li>
    </ul>
  </div>
</div>

      <div className="motivation-box">
  <h2>Consistency Beats Intensity</h2>

  <p>
    Complete each week consistently and track your roadmap progress.
  </p>

  <div className="progress-container">
    <div
      className="progress-bar"
      style={{ width: `${progressPercentage}%` }}
    ></div>
  </div>

  <p className="progress-text">
    {completedCount} / {weeklyPlan.length} Weeks Completed
  </p>
</div>

      <div className="footer-box">
        Made for Job Switchers 🚀 | by Akash Dave
      </div>
    </div>
  );
};

export default SDE2Prep;