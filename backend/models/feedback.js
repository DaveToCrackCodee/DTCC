import mongoose,{ Schema } from "mongoose";

const feedbackSchema = new mongoose.Schema({
  answers: [{
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  }]
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
export default Feedback;
