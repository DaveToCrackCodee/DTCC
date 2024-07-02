import MockProfile from "../models/mockProfile.js";
import { User } from "../models/user.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import Meeting from "google-meet-api";

dotenv.config();

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "davetocrackcode@gmail.com",
    pass: "fayjmyxesymzymdb",
  },
  tls: {
    rejectUnauthorized: false,
  },
});

// Verify transporter
transporter.verify((error, success) => {
  if (error) {
    console.log("Error verifying transporter:", error);
  } else {
    console.log("Transporter ready for sending emails");
  }
});

// Function to send mock interview email
const sendMockInterviewEmail = async ({
  link,
  date,
  email,
  current_username,
  topics,
  name,
  prevemail,
  prevtopics,
}) => {
  console.log("Recipient's email:", email);
  try {
    const mailOption = {
      from: "davetocrackcode@gmail.com",
      to: email,
      subject: "Mock Interview Scheduled",
      html: `<p> Hello ${current_username}! <br>
      Your Mock Interview is Scheduled with ${name}, <br>
      Now ${name} will take your interview with Your selected Topics and they are <br> ${topics}.<br>
      And you will have to take ${name}'s Interview with topics given :- <br> ${prevtopics}.<br>
      <hr>
      Date: ${date} <br>
      Time: 9:00AM
      Join the meet with link :- ${link}
      </p>`,
    };

    // Send email
    await transporter.sendMail(mailOption);
    console.log("Email sent successfully");
  } catch (err) {
    console.error("Error sending email:", err);
    // Handle error within the function
    throw new Error("Error sending email");
  }
};

// Apply for Mock interview controller function
const applyForMock = asyncHandler(async (req, res) => {
  console.log("Mock controller");
  try {
    const current_email = req.user.email;
    if (req.user.interviews.length != 0) {
      if (
        req.user.interviews[req.user.interviews.length - 1].status !=
        "Completed"
      ) {
        res
          .status(405)
          .json({ error: "You can only apply for one interview at a time." });
        return;
      }
      if (
        req.user.interviews[req.user.interviews.length - 1].feedbackGiven ==
        false
      ) {
        res
          .status(406)
          .json({ error: "Please submit the feedback for previous match" });
        return;
      }
    }

    const selectedTopics = req.body.topics; // Use req.body.topics to access the array of selected topics
    console.log("Selected topics:- ", selectedTopics);
    const previousEntryMock = await MockProfile.findOne();

    const newMockProfile = new MockProfile({
      userName: req.user.userName,
      email: req.user.email,
      topics: selectedTopics,
    });

    const interviewDetails = {
      topics: selectedTopics,
      feedback: null,
    };

    const currentEntry = await User.findOne({ email: current_email }).populate(
      "interviews"
    );
    await newMockProfile.save();

    if (previousEntryMock != null && current_email == previousEntryMock.email) {
      currentEntry.interviews[currentEntry.interviews.length - 1] =
        interviewDetails;
      console.log(interviewDetails);
      await MockProfile.findOneAndDelete(previousEntryMock);
      await currentEntry.save();
      console.log("User already applied");
    } else if (previousEntryMock) {
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);
      const day = String(tomorrow.getDate()).padStart(2, "0"); // Add leading zero if day is single digit
      const month = String(tomorrow.getMonth() + 1).padStart(2, "0"); // Add leading zero if month is single digit
      const year = tomorrow.getFullYear();
      const timeofMeet = "22:00";
      const googleMeetLink = process.env.GOOGLE_MEET_LINK;

      const meetDate = `${year}-${month}-${day}`;

      const formattedDate = `${day}-${month}-${year}`;
      const previousEntry = await User.findOne({
        email: previousEntryMock.email,
      }).populate("interviews");

      interviewDetails.interviewer = previousEntryMock.userName;
      interviewDetails.interviewerEmail = previousEntryMock.email;
      interviewDetails.status = "Scheduled";
      interviewDetails.interviewDate = formattedDate;
      currentEntry.interviews.push(interviewDetails);

      previousEntry.interviews[
        previousEntry.interviews.length - 1
      ].interviewer = req.user.userName;
      previousEntry.interviews[
        previousEntry.interviews.length - 1
      ].interviewerEmail = req.user.email;
      previousEntry.interviews[previousEntry.interviews.length - 1].status =
        "Scheduled";
      previousEntry.interviews[
        previousEntry.interviews.length - 1
      ].interviewDate = formattedDate;

      await previousEntry.save();
      await currentEntry.save();

      await sendMockInterviewEmail({
        link: googleMeetLink,
        date: formattedDate,
        email: previousEntryMock.email,
        current_username: previousEntryMock.userName,
        topics: previousEntryMock.topics,
        name: req.user.userName,
        prevemail: current_email,
        prevtopics: selectedTopics,
      });
      await sendMockInterviewEmail({
        link: googleMeetLink,
        date: formattedDate,
        email: current_email,
        current_username: req.user.userName,
        topics: selectedTopics,
        name: previousEntryMock.userName,
        prevemail: previousEntryMock.email,
        prevtopics: previousEntryMock.topics,
      });

      await MockProfile.findOneAndDelete(previousEntryMock);
      await MockProfile.findOneAndDelete({ _id: newMockProfile._id });
    } else {
      currentEntry.interviews.push(interviewDetails);
      await currentEntry.save();
      console.log("User mock details saved");
    }

    res.json({ message: "Mock Interview Applied successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while processing the mock request" });
  }
});

// get Mock interviews history function
const getMockHistory = asyncHandler(async (req, res) => {
  try {
    const user = req.user;
    const interviewsList = user.interviews;
    const currentDate = new Date();

    // console.log("helooooooo", user);
    user.interviews.forEach((interview) => {
      if (interview.interviewDate != "Not Scheduled yet") {
        const interviewDateParts = interview.interviewDate.split("-");
        const interviewDate = new Date(
          parseInt(interviewDateParts[2]), // Year
          parseInt(interviewDateParts[1]) - 1, // Month (zero-based index)
          parseInt(interviewDateParts[0]) // Day
        );

        if (interviewDate < currentDate) {
          interview.status = "Completed";
        }
      }
    });
    await user.save();
    // console.log("endddddddd");
    if (!user) {
      throw new ApiError(400, "Some error when fetching user from database");
    }
    return res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { data: user.interviews },
          "All Mock History are fetched successfully"
        )
      );
  } catch (error) {
    throw new ApiError(500, "Some internal Server Error");
  }
});

// submit feedback
const submitFeedback = asyncHandler(async (req, res) => {
  console.log("inside feedback submit function");
  try {
    const current_email = req.user.email;
    const user = req.user;
    const answersRecieved = [
      { question: "Rate Communication (1-5)", answer: req.body.communication },
      { question: "Rate Knowledge of Topic (1-5)", answer: req.body.knowledge },
      { question: "Rate Confidence (1-5)", answer: req.body.confidence },
      { question: "Feedback (Up to 100 words)", answer: req.body.feedback },
    ];

    console.log(answersRecieved);

    const interviewerEmailID =
      user.interviews[user.interviews.length - 1].interviewerEmail;
    const interview_date =
      user.interviews[user.interviews.length - 1].interviewDate;
    const previousEntry = await User.findOne({
      email: interviewerEmailID,
    }).populate("interviews");
    console.log("give interviewdate ", interview_date);
    console.log("given mail ", current_email);
    previousEntry.interviews.forEach((interview) => {
      console.log(" entry : Date : - ", interview.interviewDate);
      console.log(" entry : Email : - ", interview.interviewerEmail);

      if (
        interview.interviewerEmail == current_email &&
        interview.interviewDate == interview_date
      ) {
        console.log("Sds");
        interview.feedbackAnswer = answersRecieved;
      }
    });
    user.interviews[user.interviews.length - 1].feedbackGiven = true;

    // console.log(feedbackRec);
    await user.save();
    await previousEntry.save();

    res.json({ message: "Feedback submitted successfully" });
  } catch (error) {
    throw new ApiError(500, "Some internal Server Error");
  }
});

export { applyForMock, sendMockInterviewEmail, getMockHistory, submitFeedback };
