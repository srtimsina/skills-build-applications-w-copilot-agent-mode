import mongoose from 'mongoose';
const teamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    createdAt: { type: Date, required: true, default: () => new Date() }
});
const TeamModel = mongoose.models.Team || mongoose.model('Team', teamSchema);
export default TeamModel;
