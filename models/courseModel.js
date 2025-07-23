const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  level: {
    type: String,
    enum: ['مبتدئ', 'متوسط', 'متقدم'],
    default: 'مبتدئ'
  },
 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
