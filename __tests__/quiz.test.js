const request = require('supertest');
const app = require('../server');

describe('Quiz API', () => {
  it('should create a new quiz', async () => {
    const res = await request(app).post('/api/quizzes').send({
      title: 'Testing Basics',
      description: 'A test quiz',
      createdBy: 'TestUser',
      questions: [
        {
          question: 'What is testing?',
          options: [
            { option: 'Checking code', isCorrect: true },
            { option: 'Doing nothing', isCorrect: false }
          ]
        }
      ]
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('_id');
    expect(res.body.title).toBe('Testing Basics');
  });
});
