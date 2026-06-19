import mongoose from 'mongoose';

export interface IWorkout {
  title: string;
  description: string;
  focusArea: string;
  durationMinutes: number;
  difficulty: string;
  createdAt: Date;
}

const workoutSchema = new mongoose.Schema<IWorkout>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  focusArea: { type: String, required: true },
  durationMinutes: { type: Number, required: true },
  difficulty: { type: String, required: true },
  createdAt: { type: Date, required: true, default: () => new Date() }
});

const WorkoutModel = mongoose.models.Workout || mongoose.model<IWorkout>('Workout', workoutSchema);
export default WorkoutModel;
