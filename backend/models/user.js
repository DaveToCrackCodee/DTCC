import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    googleId: {
      type: String,
      // required: true,
    },
    userName: {
      type: String,
      required: true,
      //trim: true, // Remove whitespace for better storage and queries
    },
    firstName: {
      type: String,
      // required: true,
    },
    lastName: {
      type: String,
      // required: true,
    },
    image: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true, // Enforce unique Gmail addresses
      trim: true,
      validate: {
        validator: (email) =>
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
            email
          ),
        message: "Invalid email format",
      },
    },
    password: {
      type: String,
      // required: true,
      minlength: 7, // Enforce minimum password length
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    interviews: [
      {
        interviewer: {
          type: String,
          default: "Not Alloted",
        },
        interviewerEmail: {
          type: String,
          default: "NA",
        },
        topics: {
          type: [String],
          required: true,
        },
        status: {
          type: String,
          enum: ["In Progress", "Scheduled", "Completed", "Cancelled"],
          default: "In Progress",
        },
        interviewDate: {
          type: String,
          required: false,
          default: "Not Scheduled yet",
        },
        feedbackGiven: {
          type: Boolean,
          default: false,
        },
        feedbackAnswer: [
          {
            question: {
              type: String,
              required: true,
            },
            answer: {
              type: String,
              required: true,
            },
          },
        ],
      },
    ],
  },
  { timestamp: true }
);

userSchema.pre("save", async function (next) {
  //phle ham check krege ki ahgar password phle hi encrypt hom chuka he to use dobara encrypt naa kare

  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
});

//upar hamne encrypt to kr diya pr user jab login karega to use asli password chahiye iske liye ham method banayenge

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

//token genereate krne ke liye method

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      userName: this.userName,
      isAdmin: this.isAdmin,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};

export const User = mongoose.model("User", userSchema);
