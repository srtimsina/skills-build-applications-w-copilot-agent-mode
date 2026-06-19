import { Router } from 'express';
import UserModel from '../models/User.js';
const router = Router();
router.get('/', async (req, res) => {
    const users = await UserModel.find().populate('team');
    res.json({ users });
});
router.post('/', async (req, res) => {
    const user = await UserModel.create(req.body);
    res.status(201).json({ message: 'User created', user });
});
export default router;
