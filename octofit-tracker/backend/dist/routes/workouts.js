import { Router } from 'express';
import WorkoutModel from '../models/Workout.js';
const router = Router();
router.get('/', async (req, res) => {
    const workouts = await WorkoutModel.find();
    res.json({ workouts });
});
router.post('/', async (req, res) => {
    const workout = await WorkoutModel.create(req.body);
    res.status(201).json({ message: 'Workout created', workout });
});
export default router;
