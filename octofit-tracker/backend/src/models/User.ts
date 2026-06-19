import mongoose from 'mongoose';

export interface IUser {
  name: string;
  email: string;
  role: string;
  team?: mongoose.Types.ObjectId;
  joinedAt: Date;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  role: { type: String, required: true },
  team: { type: mongoose.Schema.Types.ObjectId, ref: 'Team' },
  joinedAt: { type: Date, required: true, default: () => new Date() }
});

const UserModel = mongoose.models.User || mongoose.model<IUser>('User', userSchema);
export default UserModel;
