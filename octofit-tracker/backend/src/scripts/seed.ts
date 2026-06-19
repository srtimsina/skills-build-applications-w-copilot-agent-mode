import mongoose from 'mongoose';
import UserModel from '../models/User.js';
import TeamModel from '../models/Team.js';
import ActivityModel from '../models/Activity.js';
import WorkoutModel from '../models/Workout.js';
import LeaderboardModel from '../models/Leaderboard.js';

// Seed the octofit_db database with test data
const MONGO_URI = process.env.MONGO_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';

async function seed() {
  await mongoose.connect(MONGO_URI);

  console.log('Connected to MongoDB for seed');

  await Promise.all([
    UserModel.deleteMany({}),
    TeamModel.deleteMany({}),
    ActivityModel.deleteMany({}),
    WorkoutModel.deleteMany({}),
    LeaderboardModel.deleteMany({})
  ]);

  const users = await UserModel.create([
    { name: 'Ava Morgan', email: 'ava.morgan@example.com', role: 'member', joinedAt: new Date('2026-01-05') },
    { name: 'Noah Patel', email: 'noah.patel@example.com', role: 'coach', joinedAt: new Date('2026-02-12') },
    { name: 'Mia Chen', email: 'mia.chen@example.com', role: 'member', joinedAt: new Date('2026-03-28') }
  ]);

  const teams = await TeamModel.create([
    {
      name: 'Ocean Runners',
      description: 'A team focused on endurance and community support.',
      members: [users[0]._id, users[2]._id],
      createdAt: new Date('2026-02-01')
    },
    {
      name: 'Peak Performance',
      description: 'Strength and HIIT enthusiasts training for monthly challenges.',
      members: [users[1]._id],
      createdAt: new Date('2026-03-10')
    }
  ]);

  const workouts = await WorkoutModel.create([
    {
      title: 'Morning Core Circuit',
      description: 'A 30-minute core-centered workout to start the day strong.',
      focusArea: 'core',
      durationMinutes: 30,
      difficulty: 'intermediate',
      createdAt: new Date('2026-04-01')
    },
    {
      title: 'Recovery Yoga Flow',
      description: 'Gentle stretching and mobility sequence for post-training recovery.',
      focusArea: 'mobility',
      durationMinutes: 25,
      difficulty: 'easy',
      createdAt: new Date('2026-04-02')
    }
  ]);

  const activities = await ActivityModel.create([
    {
      user: users[0]._id,
      type: 'Running',
      durationMinutes: 45,
      caloriesBurned: 420,
      performedAt: new Date('2026-04-05T07:30:00Z'),
      notes: 'Morning trail run with steady pace.'
    },
    {
      user: users[2]._id,
      type: 'Strength Training',
      durationMinutes: 50,
      caloriesBurned: 500,
      performedAt: new Date('2026-04-05T17:00:00Z'),
      notes: 'Upper-body session focused on presses and rows.'
    },
    {
      user: users[1]._id,
      type: 'HIIT',
      durationMinutes: 35,
      caloriesBurned: 380,
      performedAt: new Date('2026-04-06T06:45:00Z'),
      notes: 'Interval circuit with kettlebell swings and burpees.'
    }
  ]);

  await LeaderboardModel.create([
    { user: users[0]._id, score: 1240, rank: 1, updatedAt: new Date('2026-04-06') },
    { user: users[2]._id, score: 1100, rank: 2, updatedAt: new Date('2026-04-06') },
    { user: users[1]._id, score: 980, rank: 3, updatedAt: new Date('2026-04-06') }
  ]);

  console.log('Seed the octofit_db database with test data');
  console.log({
    users: users.length,
    teams: teams.length,
    workouts: workouts.length,
    activities: activities.length
  });

  await mongoose.disconnect();
  console.log('Seed complete and disconnected');
}

seed().catch((err) => {
  console.error('Seed failed', err);
  process.exit(1);
});
