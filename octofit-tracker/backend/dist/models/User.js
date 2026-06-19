import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, required: true },
    team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
    joinedAt: { type: Date, required: true, default: () => new Date() }
});
const UserModel = mongoose.models.User || mongoose.model('User', userSchema);
export default UserModel;
