import { Router } from 'express';
import ActivityModel from '../models/Activity.js';
const router = Router();
router.get('/', async (req, res) => {
    const activities = await ActivityModel.find().populate('user');
    res.json({ activities });
});
router.post('/', async (req, res) => {
    const activity = await ActivityModel.create(req.body);
    res.status(201).json({ message: 'Activity logged', activity });
});
export default router;
