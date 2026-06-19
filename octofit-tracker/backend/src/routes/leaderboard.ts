import { Router } from 'express';
import LeaderboardModel from '../models/Leaderboard.js';

const router = Router();

router.get('/', async (req, res) => {
  const leaderboard = await LeaderboardModel.find().sort({ rank: 1 }).populate('user');
  res.json({ leaderboard });
});

export default router;
