const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/courses', courseController.getAllCourses);
router.post('/courses', courseController.createCourse);
router.delete('/courses/:id', courseController.deleteCourse);

module.exports = router;
