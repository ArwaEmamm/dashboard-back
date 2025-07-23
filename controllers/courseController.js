const Course = require('../models/courseModel');

// Get all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add new course
exports.createCourse = async (req, res) => {
  try {
    const { title, description, level, image } = req.body;
    const newCourse = await Course.create({ title, description, level, image });
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(400).json({ message: 'Invalid course data' });
  }
};

// Delete course
exports.deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) return res.status(404).json({ message: 'Course not found' });
    res.json({ message: 'Course deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server Error' });
  }
};
