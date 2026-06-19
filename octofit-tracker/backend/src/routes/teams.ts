import { Router } from 'express';
import TeamModel from '../models/Team.js';

const router = Router();

router.get('/', async (req, res) => {
  const teams = await TeamModel.find().populate('members');
  res.json({ teams });
});

router.post('/', async (req, res) => {
  const team = await TeamModel.create(req.body);
  res.status(201).json({ message: 'Team created', team });
});

export default router;
