import { Schema, model, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  profile: Schema.Types.ObjectId; // Profile is assumed to be referenced by ObjectId
}

// Create a Mongoose schema
const UserSchema = new Schema<IUser>({
  username: { type: String, required: true },
  email: { type: String, required: true },
  profile: { type: Schema.Types.ObjectId, ref: "Profile" }, // Assuming 'Profile' model exists
});

// 2b - Add an index on the 'profile' field for optimization
UserSchema.index({ profile: 1 });

const User = model<IUser>("User", UserSchema);

export default User;
