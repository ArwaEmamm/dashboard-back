const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const quizRoutes = require('./routes/quizRoutes');
const announcementRoutes = require('./routes/announcementRoutes');
const courseRoutes = require('./routes/courseRoutes');


const app = express();
const PORT = process.env.PORT || 8000;

app.use(cors()); 
app.use(express.json());

app.use('/api', quizRoutes);
app.use('/api', announcementRoutes);
app.use('/api', courseRoutes);


mongoose.connect("mongodb+srv://arwaaemamm:uvOnVAnP1xVadTTO@cluster0.v7oatnz.mongodb.net/quizApp?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('MongoDB Atlas connected');
    if (require.main === module) {
      app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
      });
    }
  })
  .catch(err => {
    console.error('DB connection error:', err);
  });

module.exports = app;
