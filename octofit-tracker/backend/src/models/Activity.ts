import mongoose from 'mongoose';

export interface IActivity {
  user: mongoose.Types.ObjectId;
  type: string;
  durationMinutes: number;
  caloriesBurned: number;
  performedAt: Date;
  notes?: string;
}

const activitySchema = new mongoose.Schema<IActivity>({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  caloriesBurned: { type: Number, required: true },
  performedAt: { type: Date, required: true },
  notes: { type: String }
});

const ActivityModel = mongoose.models.Activity || mongoose.model<IActivity>('Activity', activitySchema);
export default ActivityModel;
