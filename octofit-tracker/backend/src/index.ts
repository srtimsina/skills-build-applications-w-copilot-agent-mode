import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = Number(process.env.PORT ?? 8000);
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit';

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'OctoFit Tracker backend is running' });
});

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Backend listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
