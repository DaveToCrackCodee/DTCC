import mongoose,{ Schema } from "mongoose";
// const mongoose = require('mongoose');

// Define schema for mock interview
const mockSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  topics: {
    type: [String],
    required: true
  },
  status: {
    type: String,
    enum: ['Scheduled', 'Completed', 'Cancelled'],
    default: 'Scheduled'
  }
});

// Create model for mock interview
const MockProfile = mongoose.model('MockProfile', mockSchema);
export default MockProfile;
