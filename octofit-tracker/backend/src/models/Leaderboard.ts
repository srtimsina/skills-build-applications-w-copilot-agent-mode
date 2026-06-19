import mongoose from 'mongoose';

export interface ILeaderboardEntry {
  user: mongoose.Types.ObjectId;
  score: number;
  rank: number;
  updatedAt: Date;
}

const leaderboardSchema = new mongoose.Schema<ILeaderboardEntry>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  score: { type: Number, required: true },
  rank: { type: Number, required: true },
  updatedAt: { type: Date, required: true, default: () => new Date() }
});

const LeaderboardModel = mongoose.models.Leaderboard || mongoose.model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
export default LeaderboardModel;
