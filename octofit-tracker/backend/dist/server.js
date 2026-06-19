import express from 'express';
import usersRouter from './routes/users.js';
import teamsRouter from './routes/teams.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import workoutsRouter from './routes/workouts.js';
const app = express();
// Codespaces and localhost URL configuration
const CODESPACE_NAME = process.env.CODESPACE_NAME;
const PORT = Number(process.env.PORT ?? 8000);
export const getApiUrl = () => {
    return CODESPACE_NAME
        ? `https://${CODESPACE_NAME}-8000.app.github.dev`
        : `http://localhost:${PORT}`;
};
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'OctoFit Tracker backend is running' });
});
app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);
export default app;
