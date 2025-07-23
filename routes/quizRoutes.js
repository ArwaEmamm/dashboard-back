const express = require('express'); 
const router = express.Router();   
const quizController = require('../controllers/quizController');

router.post('/quizzes', quizController.createQuiz);
router.get('/quizzes', quizController.getAllQuizzes);
router.get('/quizzes/:id', quizController.getQuiz);
router.delete('/quizzes/:id', quizController.deleteQuiz);

module.exports = router;
