const Quiz = require('../models/Quiz');

exports.createQuiz = async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(201).json(quiz);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllQuizzes = async (req, res) => {
  try {
    const { page = 1, limit = 10, search = '' } = req.query;

    const query = {
      title: { $regex: search, $options: 'i' }, 
    };

    const quizzes = await Quiz.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit));

    const total = await Quiz.countDocuments(query);

    res.status(200).json({
      data: quizzes,
      total,
      currentPage: Number(page),
      totalPages: Math.ceil(total / limit)
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json(quiz);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteQuiz = async (req, res) => {
  try {
    const quiz = await Quiz.findByIdAndDelete(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.status(200).json({ message: 'Quiz deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
