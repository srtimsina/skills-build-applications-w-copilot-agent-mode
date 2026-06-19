import mongoose from 'mongoose';
const workoutSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    focusArea: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, required: true },
    createdAt: { type: Date, required: true, default: () => new Date() }
});
const WorkoutModel = mongoose.models.Workout || mongoose.model('Workout', workoutSchema);
export default WorkoutModel;
