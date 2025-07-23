const mongoose = require('mongoose');
const schema = mongoose.Schema;

const quizSchema = new schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  questions: [
    {
      question: {
        type: String,
        required: true
      },
      options: [
        {
          option: {
            type: String,
            required: true
          },
          isCorrect: {
            type: Boolean,
            default: false
          }
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  createdBy: {
    type: String,
    required: true
  }
});

const Quiz = mongoose.model('Quiz', quizSchema);
module.exports = Quiz;
